Ext.define("BaristaStuff.model.Product", {
	extend: 'BaristaStuff.model.BaseModel',

	config: {
		idProperty: 'id',

		fields: [{
				name: 'id'
			}, {
				name: 'brandId'
			}, {
				name: 'name'
			}
		],
		belongsTo: [{
				model: 'BaristaStuff.model.Brand',
				name: 'Brand',
				primaryKey: 'id',
				foreignKey: 'brandId',
				foreignStore: 'Brands'
			}
		],
		hasMany: [{
				model: 'BaristaStuff.model.InstalledProduct',
				name: 'InstalledProduct',
				primaryKey: 'id',
				foreignKey: 'productId',
				foreignStore: 'InstalledProducts'
			}
		]
	}
});