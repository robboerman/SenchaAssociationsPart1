Ext.define("BaristaStuff.model.InstalledProduct", {
	extend: 'BaristaStuff.model.BaseModel',

	config: {
		idProperty: 'id',

		fields: [{
				name: 'id'
			}, {
				name: 'customerId'
			}, {
				name: 'productId'
			}, {
				name: 'installDate'
			}
		],
		belongsTo: [{
				model: 'BaristaStuff.model.Customer',
				name: 'Customer',
				primaryKey: 'id',
				foreignKey: 'customerId',
				foreignStore: 'Customers'
			},
			{
				model: 'BaristaStuff.model.Product',
				name: 'Product',
				primaryKey: 'id',
				foreignKey: 'productId',
				foreignStore: 'Products'
			}
		],
		hasMany: [{
				model: 'BaristaStuff.model.ServiceRequest',
				name: 'ServiceRequest',
				primaryKey: 'id',
				foreignKey: 'installedProductId',
				foreignStore: 'ServiceRequests'
			}
		]
	}
});