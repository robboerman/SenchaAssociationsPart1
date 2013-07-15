Ext.define("BaristaStuff.model.Customer", {
	extend: 'BaristaStuff.model.BaseModel',

	config: {
		idProperty: 'id',

		fields: [{
				name: 'id'
			}, {
				name: 'firstName'
			}, {
				name: 'lastName'
			}, {
				name: 'street'
			}, {
				name: 'postalCode'
			}, {
				name: 'city'
			}, {
				name: 'telephone'
			}
		],

		hasMany: [{
				model: 'BaristaStuff.model.InstalledProduct',
				name: 'InstalledProduct',
				primaryKey: 'id',
				foreignKey: 'customerId',
				foreignStore: 'InstalledProducts'
			}
		]
	}
});