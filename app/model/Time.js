Ext.define("BaristaStuff.model.Time", {
	extend: 'BaristaStuff.model.BaseModel',

	config: {
		idProperty: 'id',

		fields: [{
				name: 'id'
			}, {
				name: 'workOrderId'
			}, {
				name: 'start',
				type: 'date'
			}, {
				name: 'end',
				type: 'date'
			}
		],
		belongsTo: [{
				model: 'BaristaStuff.model.WorkOrder',
				name: 'WorkOrder',
				primaryKey: 'id',
				foreignKey: 'workOrderId',
				foreignStore: 'WorkOrders'
			}
		]
	}
});