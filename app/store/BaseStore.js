Ext.define('BaristaStuff.store.BaseStore', {
	extend: 'Ext.data.Store',

	findRecordAll: function(key, value) {
		var i, record;
		if(typeof key === 'function') {
			var fn = key;
			for(i = 0; i < this.data.all.length; i += 1) {
				record = this.data.all[i];
				if(fn(record)) {
					return record;
				}
			}
		} else {
			for(i = 0; i < this.data.all.length; i += 1) {
				record = this.data.all[i];
				if(record.get(key) === value) {
					return record;
				}
			}
		}
		return null;
	},

	findRecordsAll: function(key, value) {
		var i, record, col = [];
		if(typeof key === 'function') {
			var fn = key;
			for(i = 0; i < this.data.all.length; i += 1) {
				record = this.data.all[i];
				if(fn(record)) {
					col.push(record);
				}
			}
		} else {
			for(i = 0; i < this.data.all.length; i += 1) {
				record = this.data.all[i];
				if(record.get(key) === value) {
					col.push(record);
				}
			}
		}
		return col;
	}
});