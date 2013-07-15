Ext.define('BaristaStuff.store.Brands', {
	extend: 'BaristaStuff.store.BaseStore',

	config: {
		model: 'BaristaStuff.model.Brand',
		data: [{
			id: 1,
			name: 'Ascaso'
		},
		{
			id: 2,
			name: 'ECM'
		},
		{
			id: 3,
			name: 'Expobar'
		},
		{
			id: 4,
			name: 'Vibiemme'
		}
		]
	}
});