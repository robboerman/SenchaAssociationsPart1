Ext.define('BaristaStuff.view.WorkOrder.ActivityList', {
	extend: 'Ext.dataview.List',
	xtype: 'workorderActivityList',

	requires: [
		'Ext.Toolbar'
	],

	config: {
		itemTpl: [
			'<div class="workorder">',
				'<table style="width: 100%">',
				'<tr>',
					'<td style="width: 25%">Type: </td>',
					'<td>{type}</td>',
				'</tr>',
				'<tr>',
					'<td style="width: 25%;vertical-align: top;">Comments: </td>',
					'<td>{comments)}</td>',
				'</table>',

				// '<div style="float: right">{ServiceRequest.status}</strong></div>',
				// '<div style="float: left; clear: left;">City: {ServiceRequest.InstalledProduct.Customer.city}</div>',
				// '<div style="float: left; clear: left;">Product: </div>',
				// '<div style="float: left; clear: left;">Description: {ServiceRequest.description}</div>',
			'</div>'
		],
		store: 'Activities',
		emptyText: 'No activities logged yet',

		listeners: {
			select: function(list) {
				setTimeout(function() {list.deselectAll();},1); // With the timeout we allow the select to finish setting the selected class before deselecting
				return false; // prevent selection
			}
		}
	}
});
