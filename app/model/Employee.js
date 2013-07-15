Ext.define("BaristaStuff.model.Employee", {
	extend: 'BaristaStuff.model.BaseModel',

	config: {
		idProperty: 'id',

		fields: [{
				name: 'id'
			}, {
				name: 'firstName'
			}, {
				name: 'lastName'
			}
		],

		hasMany: [{
				model: 'BaristaStuff.model.WorkOrder',
				name: 'WorkOrder',
				primaryKey: 'id',
				foreignKey: 'employeeId',
				foreignStore: 'WorkOrders'
			}
		]
	}
});