Ext.define("BaristaStuff.model.Activity", {
	extend: 'BaristaStuff.model.BaseModel',

	config: {
		idProperty: 'id',

		fields: [{
				name: 'id'
			}, {
				name: 'workOrderId'
			}, {
				name: 'type'
			}, {
				name: 'comments'
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