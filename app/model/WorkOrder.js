Ext.define("BaristaStuff.model.WorkOrder", {
	extend: 'BaristaStuff.model.BaseModel',

	config: {
		idProperty: 'id',

		fields: [{
				name: 'id'
			}, {
				name: 'serviceRequestId'
			}, {
				name: 'employeeId'
			}, {
				name: 'date',
				type: 'date'
				// dateFormat: 'Y-m-d'

				// convert: function(val) {
				// 	return Ext.Date.format(new Date(parseInt(val,10)), 'Y-n-j')
				// }
			}, {
				name: 'description'
			}
		],
		belongsTo: [{
				model: 'BaristaStuff.model.ServiceRequest',
				name: 'ServiceRequest',
				primaryKey: 'id',
				foreignKey: 'serviceRequestId',
				foreignStore: 'ServiceRequests'
			},
			{
				model: 'BaristaStuff.model.Employee',
				name: 'Employee',
				primaryKey: 'id',
				foreignKey: 'employeeId',
				foreignStore: 'Employees'
			}
		],
		hasMany: [{
				model: 'BaristaStuff.model.Time',
				name: 'Time',
				primaryKey: 'id',
				foreignKey: 'workOrderId',
				foreignStore: 'Times'
			},
			{
				model: 'BaristaStuff.model.Activity',
				name: 'Activity',
				primaryKey: 'id',
				foreignKey: 'workOrderId',
				foreignStore: 'Activities'
			}
		]
	}
});