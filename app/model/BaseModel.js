Ext.define("BaristaStuff.model.BaseModel", {
	extend: 'Ext.data.Model',

	linkedAssociations: false,

	config: {
		// Use uuid strategy for creating new ids
		identifier: {
            type: 'uuid'
        }
	},

	inheritableStatics: {

		/**
		 * The relation path mapper.
		 *
		 * @return A map of all the objects this model has relations to en their possible paths.
		 */
		// TODO: check if we really want to cache this.
		getAllPaths: function() {
			var name;
			if(this.pathHistory) {
				return this.pathHistory;
			}
			this.pathHistory = { };

			name = this.modelName.substr(this.modelName.lastIndexOf('.') + 1);
			this.pathHistory[name] = {
				paths:  [ [ name ] ]
			};

			this._getPaths(this, name, this.pathHistory);
			return this.pathHistory;
		},

		_getPaths: function(root, mypath, history) {
			var i, asoc, asocModel, name, sub;
			// hasMany, belongsTo, hasOne
			if(this.associations) {
				// For every association.
				for(i = 0; i < this.associations.all.length; i += 1) {
					asoc = this.associations.all[i].config;
					asocModel = Ext.ModelManager.getModel(asoc.associatedModel);
					name = asoc.name;

					sub = mypath + '.';
					// We already know this object in our current path.
					if(sub.search(new RegExp("(\\.|^)"+name+"\\.","g")) !== -1) {
						continue;
					}

					sub += name;
					// New path, record and descend.
					if(!history[name] || !this._contains(history[name].paths, sub)) {
						history[name] = history[name] ||  { paths: [] };
						// Add a new path to object 'name' to list of paths to the object.
						history[name].paths.push(sub.split('.'));
						asocModel._getPaths(root, sub, history); // Descend.
					}
				}
			}
		},

		getModelName: function() {
			var name = this.getName();
			return name.substr(name.lastIndexOf('.') + 1);
		},

		_contains: function(array, value) {
			var i;
			for(i = 0; i < array.length; i += 1) {
				if(array[i] === value) {
					return true;
				}
			}
			return false;
		}
	},

	getModelName: function() {
		return this.self.getModelName();
	},

	/**
	 * Finds all associated records belonging to this instance.
	 *
	 * this uses the pathMapper and first path found from this object to it's destination.
	 * this uses a step by step finder using memory resident records.
	 * For every part in path
	 *   get all records in current level from records from previous level
	 *
	 * Start level is the starting instance [ this ]
	 *
	 * @param modelName to find all records from.
	 * @return {Array} of associated records.
	 */
	getAssociatedRecords: function(modelName) {
		var i, o, asoc, list, newList, split, paths = this.self.getAllPaths(), parent;
		if(!paths[modelName]) {
			throw new Error('There is no path between ' + this.getModelName() + ' and ' + modelName);
		}

		split = paths[modelName].paths[0];
		list = [ this ]; // Start level
		newList = []; // Next level.
		// Skip the first entry(self);
		for(i = 1; i < split.length; i += 1) { // Descend.
			if(list.length === 0) {
				return [];
			}
			// Find association for this level
			asoc = list[0].associations.get(split[i]);
			if(!asoc) {
				throw new Error('Cannot find association ' + split[i] + ' on ' + list[0].getModelName());
			}

			// Get all sub records from current level.
			for(o = 0; o < list.length; o += 1) {
				if(asoc.getType().toLowerCase() === 'hasmany') {
					newList = newList.concat(list[o].getChildren(split[i]));
				} else {
					parent = list[o].getParent(split[i]);
					if(parent !== null) {
						newList.push(parent);
					}
				}
			}
			list = newList; // Move next level to current level.
			newList = [];
		}
		return list;
	},

	/* uses information from the associations to fetch a parent from an associated store */
	getParent: function(assocName) {
		var assoc = this.associations.get(assocName);
		if (!assoc) {
			return null;
		}
		var store = Ext.StoreMgr.get(assoc.config.foreignStore);
		if (!store) {
			return null;
		}
		return store.findRecordAll(assoc.config.primaryKey, this.get(assoc.config.foreignKey));
	},

	getChildren: function(assocName) {
		var assoc = this.associations.get(assocName),
			id = this.get(assoc.config.primaryKey);

		if (!assoc) {
			return null;
		}
		var store = Ext.StoreMgr.get(assoc.config.foreignStore);
		if (!store) {
			return null;
		}

		return store.findRecordsAll(function(record) {
			return record.get(assoc.config.foreignKey) === id;
		});
	},

	getChildrenData: function(assocName){
		var records = this.getChildren(assocName);
		var rt = [];
		for(var i in records){
			rt.push(records[i].data);
		}
		return rt;
	},

	/* warning, recursive down in combination with up can be dangerous when there are loops in associations */
	getData: function(includeAssociated,down) {
		if (includeAssociated && !this.linkedAssociations) {
			this.linkedAssociations = true;
			this.linkAssociations(includeAssociated);
		}

		var data = this.callParent(arguments);

		if (down) {
			var childData = this.getAllChildData();
			Ext.apply(data, childData);
		}

		return data;
	},

	getRawData: function(strict) {
		var i, meta, data = Ext.apply({}, this.getData(false));
		if(!SalesForce.metaStore[this.self.getSfName()]) {
			return data;
		}
		meta = SalesForce.metaStore[this.self.getSfName()];
		for(i in data) {
			if(!meta.fieldMap[i] || (strict && !meta.fieldMap[i].createable)) {
				delete data[i];
			}
		}
		return data;
	},

	getFlattenedData: function(includeAssociated) {
		var data = this.getData(includeAssociated, false); // don't ever recurse down when getting flattened data!

		/* This function flattens the datastructure of am object such that it can be used in a form
		 * {foo:1,bar:{blah: {boo: 3}}} becomes {foo: 1, bar.blah.boo: 3}
		 * This is the only way to use associated data in a form
		 * thanks to http://stackoverflow.com/users/2214/matthew-crumley
		 */
		var count=1;
		var prop;
		var flatten = function(obj, includePrototype, into, prefix) {
			if (count++ > 20) {console.log('TOO DEEP RECURSION'); return;} // prevent infinite recursion
			into = into || {};
			prefix = prefix || "";

			for (var k in obj) {
				if (includePrototype || obj.hasOwnProperty(k)) {
					var prop = obj[k];
					if (prop instanceof Array) { continue; } // Don't recurse into hasMany relations
					if (prop && typeof prop === "object" &&
						!(prop instanceof Date || prop instanceof RegExp)) {
						flatten(prop, includePrototype, into, prefix + k + ".");
					}
					else {
						into[prefix + k] = prop;
					}
				}
			}

			return into;
		};

		return flatten(data, false);
	},

	/* this function ONLY recurses upwards (belongsTo), otherwise the data structure could become infinite */
	linkAssociations: function(includeAssociated, count) {
		var me = this,
			associations = this.associations.items,
			associationCount = associations.length,
			associationName,
			association,
			associatedRecord,
			i,
			type,
			foreignStore;

		count = count || 0;

		if (count > 10) {
			console.log('Too deep recursion in linkAssociations');
			return;
		}

		for (i = 0; i < associationCount; i++) {
			association = associations[i];
			associationName = association.getName();
			type = association.getType();
			foreignStore = association.config.foreignStore;

			if (!foreignStore) {
				continue;
			}

			if (type.toLowerCase() === 'belongsto' || type.toLowerCase() === 'hasone') {
				associatedRecord = this.getParent(associationName);
				if (associatedRecord) {
					this[association.getInstanceName()] = associatedRecord;
					associatedRecord.linkAssociations(includeAssociated, (count+1));
				} else if (this.get(association.config.foreignKey)) {
					console.log('Warning, model association not found ');
				}
			}
		}
	},
	
	getAllChildData: function() {
		var associations = this.associations.items,
			associationCount = associations.length,
			associationName,
			association,
			i,
			type,
			foreignStore,
			childData = {};

		for (i = 0; i < associationCount; i++) {
			association = associations[i];
			associationName = association.getName();
			type = association.getType();
			foreignStore = association.config.foreignStore;
	
			if (!foreignStore) {
				continue;
			}
			
			if (type.toLowerCase() == 'hasmany') {
				var children = this.getChildrenData(associationName);
				childData[associationName] = children;
			}
		}
		
		return childData;
	}
});