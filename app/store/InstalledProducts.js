Ext.define('BaristaStuff.store.InstalledProducts', {
	extend: 'BaristaStuff.store.BaseStore',

	config: {
		model: 'BaristaStuff.model.InstalledProduct',
		data: [{
			id: 1,
			customerId: 1,
			productId: 4,
			installDate: '2012-08-05'
		},
		{
			id: 2,
			customerId: 2,
			productId: 5,
			installDate: '2012-09-02'
		},
		{
			id: 3,
			customerId: 3,
			productId: 1,
			installDate: '2013-01-05'
		},
		{
			id: 4,
			customerId: 4,
			productId: 2,
			installDate: '2012-05-26'
		}
		]
	}
});