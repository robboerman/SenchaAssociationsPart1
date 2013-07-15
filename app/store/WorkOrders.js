Ext.define('BaristaStuff.store.WorkOrders', {
	extend: 'BaristaStuff.store.BaseStore',

	config: {
		model: 'BaristaStuff.model.WorkOrder',

		grouper: {
			groupFn: function(record) {
				return Ext.Date.format(record.get('date'),'l, F jS Y');
			},
			sortProperty: 'date'
		},

		data: [{
			id: 1,
			serviceRequestId: 1,
			employeeId: 1,
			date: '2013-07-14 10:00'
		},
		{
			id: 2,
			serviceRequestId: 2,
			employeeId: 1,
			date: '2013-07-14 12:00'
		},
		{
			id: 3,
			serviceRequestId: 3,
			employeeId: 1,
			date: '2013-06-14 12:00'
		},
		{
			id: 4,
			serviceRequestId: 4,
			employeeId: 1,
			date: '2013-07-15 12:00'
		},
		{
			id: 5,
			serviceRequestId: 5,
			employeeId: 1,
			date: '2013-06-15 14:00'
		},
		{
			id: 6,
			serviceRequestId: 4,
			employeeId: 1,
			date: '2013-06-15 15:00'
		},
		{
			id: 7,
			serviceRequestId: 3,
			employeeId: 1,
			date: '2013-06-15 16:00'
		}
		]
	}
});