Ext.define('BaristaStuff.view.WorkOrder.TimeList', {
	extend: 'Ext.dataview.List',
	xtype: 'workorderTimeList',

	requires: [
		'Ext.Toolbar'
	],

	config: {
		itemTpl: [
			'<div class="workorder">',
				'<table style="width: 100%">',
				'<tr>',
					'<td style="width: 25%">Start: </td>',
					'<td>{start:date("H:i")}</td>',
				'</tr>',
				'<tr>',
					'<td style="width: 25%">End: </td>',
					'<td>{end:date("H:i")}</td>',
				'</table>',

				// '<div style="float: right">{ServiceRequest.status}</strong></div>',
				// '<div style="float: left; clear: left;">City: {ServiceRequest.InstalledProduct.Customer.city}</div>',
				// '<div style="float: left; clear: left;">Product: </div>',
				// '<div style="float: left; clear: left;">Description: {ServiceRequest.description}</div>',
			'</div>'
		],
		store: 'Times',
		emptyText: 'No time logged yet',

		listeners: {
			select: function(list) {
				setTimeout(function() {list.deselectAll();},1); // With the timeout we allow the select to finish setting the selected class before deselecting
				return false; // prevent selection
			}
		}
	}
});
