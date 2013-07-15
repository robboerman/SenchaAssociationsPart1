Ext.define('BaristaStuff.store.Times', {
	extend: 'BaristaStuff.store.BaseStore',

	config: {
		model: 'BaristaStuff.model.Time',
		data: [{
			id: 1,
			workOrderId: 1,
			start: '2013-01-01 12:00',
			end: '2013-01-01 13:00'
		},
		{
			id: 2,
			workOrderId: 2,
			start: '2013-01-01 10:00',
			end: '2013-01-01 11:00'
		}
		]
	}
});