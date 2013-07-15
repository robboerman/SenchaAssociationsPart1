Ext.define('BaristaStuff.view.WorkOrder.Details', {
	extend: 'Ext.form.Panel',
	xtype: 'workorderDetails',

	requires: [
		'Ext.Toolbar',
		'Ext.field.*',
		'Ext.form.*'
	],

	config: {
		items: [{
			xtype: 'fieldset',
			title: 'Customer',
			defaultType: 'textfield',
			items: [{
				name: 'ServiceRequest.InstalledProduct.Customer.firstName',
				label: 'First Name'
			},
			{
				name: 'ServiceRequest.InstalledProduct.Customer.lastName',
				label: 'Last Name'
			},
			{
				name: 'ServiceRequest.InstalledProduct.Customer.street',
				label: 'Street address'
			},
			{
				name: 'ServiceRequest.InstalledProduct.Customer.postalCode',
				label: 'Postal Code'
			},
			{
				name: 'ServiceRequest.InstalledProduct.Customer.city',
				label: 'City'
			}]
		},
		{
			xtype: 'fieldset',
			title: 'Product',
			defaultType: 'textfield',
			items: [{
				name: 'ServiceRequest.InstalledProduct.Product.Brand.name',
				label: 'Brand'
			},
			{
				name: 'ServiceRequest.InstalledProduct.Product.name',
				label: 'Type'
			},
			{
				name: 'ServiceRequest.InstalledProduct.installDate',
				label: 'Installation date'
			}]
		},
		{
			xtype: 'fieldset',
			title: 'Service request',
			defaultType: 'textfield',
			items: [{
				name: 'ServiceRequest.date',
				label: 'Request date'
			},
			{
				name: 'ServiceRequest.status',
				label: 'Status'
			},
			{
				name: 'ServiceRequest.description',
				label: 'Description',
				xtype: 'textareafield'
			}]
		}]
	}

	/**
	 * The overridden prepareData function makes sure we use the flattened data array, without object nesting
	 * If we use this we need to fetch the data in the itemTpl with {[values["ServiceRequest.description"]]}
	 */
	// prepareData: function(data, index, record) {console.log(data);
	// 	return data;
	// 	//return record.getFlattenedData(true);
 //    }
});
