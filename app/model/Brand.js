Ext.define("BaristaStuff.model.Brand", {
	extend: 'BaristaStuff.model.BaseModel',

	config: {
		idProperty: 'id',

		fields: [{
				name: 'id'
			}, {
				name: 'name'
			}
		],

		hasMany: [{
				model: 'BaristaStuff.model.Product',
				name: 'Product',
				primaryKey: 'id',
				foreignKey: 'brandId',
				foreignStore: 'Products'
			}
		]
	}
});