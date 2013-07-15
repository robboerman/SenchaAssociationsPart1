Ext.define('BaristaStuff.store.Products', {
	extend: 'BaristaStuff.store.BaseStore',

	config: {
		model: 'BaristaStuff.model.Product',
		data: [{
			id: 1,
			brandId: 1,
			name: 'Steel BAR'
		},
		{
			id: 2,
			brandId: 2,
			name: 'Elektronica Profi'
		},
		{
			id: 3,
			brandId: 2,
			name: 'Technika IV Profi DWA'
		},
		{
			id: 4,
			brandId: 3,
			name: 'Brewtus IV'
		},
		{
			id: 5,
			brandId: 4,
			name: 'Domobar'
		}
		]
	}
});