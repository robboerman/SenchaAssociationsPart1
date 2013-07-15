Ext.define("BaristaStuff.model.ServiceRequest", {
	extend: 'BaristaStuff.model.BaseModel',

	config: {
		idProperty: 'id',

		fields: [{
				name: 'id'
			}, {
				name: 'installedProductId'
			}, {
				name: 'description'
			}, {
				name: 'status'
			}, {
				name: 'date'
			}
		],
		belongsTo: [{
				model: 'BaristaStuff.model.InstalledProduct',
				name: 'InstalledProduct',
				primaryKey: 'id',
				foreignKey: 'installedProductId',
				foreignStore: 'InstalledProducts'
			}
		],
		hasMany: [{
				model: 'BaristaStuff.model.WorkOrder',
				name: 'WorkOrder',
				primaryKey: 'id',
				foreignKey: 'serviceRequestId',
				foreignStore: 'WorkOrders'
			}
		]
	}
});