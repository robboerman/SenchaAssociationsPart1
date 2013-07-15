Ext.define('BaristaStuff.store.Customers', {
	extend: 'BaristaStuff.store.BaseStore',

	config: {
		model: 'BaristaStuff.model.Customer',
		data: [{
			id: 1,
			firstName: 'Rob',
			lastName: 'Boerman',
			street: 'Espresso lane 2',
			postalCode: '12345',
			city: 'Orlando Fl',
			telephone: '555-123456'
		},
		{
			id: 2,
			firstName: 'John',
			lastName: 'Doe',
			street: 'Cappucino alley 3',
			postalCode: '54321',
			city: 'Tampa Fl',
			telephone: '555-123456'
		},
		{
			id: 3,
			firstName: 'John',
			lastName: 'Doe',
			street: 'Cappucino alley 3',
			postalCode: '54321',
			city: 'Tampa Fl',
			telephone: '555-123456'
		},
		{
			id: 4,
			firstName: 'John',
			lastName: 'Doe',
			street: 'Cappucino alley 3',
			postalCode: '54321',
			city: 'Tampa Fl',
			telephone: '555-123456'
		}
		]
	}
});