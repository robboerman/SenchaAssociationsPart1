Ext.define('BaristaStuff.store.Employees', {
	extend: 'BaristaStuff.store.BaseStore',

	config: {
		model: 'BaristaStuff.model.Employee',
		data: [{
			id: 1,
			firstName: 'John',
			lastName: 'the Repairman'
		}
		]
	}
});