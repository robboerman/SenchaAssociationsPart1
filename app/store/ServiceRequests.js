Ext.define('BaristaStuff.store.ServiceRequests', {
	extend: 'BaristaStuff.store.BaseStore',

	config: {
		model: 'BaristaStuff.model.ServiceRequest',
		data: [{
			id: 1,
			installedProductId: 3,
			description: 'Pump pressure stays at 1 bar only',
			status: 'Open',
			date: '2013-07-14 10:00'
		},
		{
			id: 2,
			installedProductId: 1,
			description: 'Water temperature too low',
			status: 'Open',
			date: '2013-07-14 12:00'
		},
		{
			id: 3,
			installedProductId: 3,
			description: 'Checkup',
			status: 'Closed',
			date: '2013-06-14 12:00'
		},
		{
			id: 4,
			installedProductId: 3,
			description: 'Machine has short circuited',
			status: 'Open',
			date: '2013-07-15 12:00'
		},
		{
			id: 5,
			installedProductId: 4,
			description: 'Checkup',
			status: 'Open',
			date: '2013-06-15 14:00'
		}
		]
	}
});