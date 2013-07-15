Ext.define('BaristaStuff.view.WorkOrder.List', {
	extend: 'Ext.dataview.List',
	xtype: 'workorderList',

	requires: [
		'Ext.Toolbar'
	],

	config: {
		itemTpl: [
			'<div class="workorder">',
				'<table style="width: 100%">',
				'<tr>',
					'<td style="width: 35%"><b>{date:date("H:i")}</b></td>',
					'<td style="text-align: right;">Status: {ServiceRequest.status}</td>',
				'</tr>',
				'<tr>',
					'<td>City: </td>',
					'<td>{ServiceRequest.InstalledProduct.Customer.city}</td>',
				'</tr>',
				'<tr>',
					'<td>Product: </td>',
					'<td>{ServiceRequest.InstalledProduct.Product.Brand.name} {ServiceRequest.InstalledProduct.Product.name}</td>',
				'</tr>',
				'<tr>',
					'<td>Description: </td>',
					'<td>{ServiceRequest.description}</td>',
				'</tr>',
				'</table>',
			'</div>'
		],
		store: 'WorkOrders',
		grouped: true,
		onItemDisclosure: true,

		items: [{
			xtype: 'toolbar',
			ui: 'dark',
			docked: 'top',
			title: 'BaristaStuff Work Orders'
		}],

		listeners: {
			select: function(list) {
				setTimeout(function() {list.deselectAll();},1); // With the timeout we allow the select to finish setting the selected class before deselecting
				return false; // prevent selection
			}
		}
		// items: [{
		// 	xtype: 'button',
		// 	scrollDock: 'bottom',
		// 	docked: 'bottom',
		// 	text: 'Load More...'
		// }]
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
