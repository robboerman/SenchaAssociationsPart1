Ext.define('BaristaStuff.view.WorkOrder.HistoryList', {
	extend: 'Ext.dataview.List',
	xtype: 'workorderHistoryList',

	requires: [
		'Ext.Toolbar'
	],

	config: {
		itemTpl: [
			'<div class="workorder">',
				'<table style="width: 100%">',
				'<tr>',
					'<td style="width: 35%">Date: </td>',
					'<td>{date:date("Y-m-j H:i")}</td>',
				'</tr>',
				'<tr>',
					'<td>Description: </td>',
					'<td>{description}</td>',
				'</tr>',
				'<tr>',
					'<td>Activities: </td>',
					'<td>X, Y, Z</td>',
				'</tr>',
				'<tr>',
					'<td>Logged time: </td>',
					'<td>0:30</td>',
				'</tr>',
				'</table>',
			'</div>'
		],
		store: {
			xclass: 'Ext.data.Store',
			model: 'BaristaStuff.model.ServiceRequest'
		},
		emptyText: 'No historic service requests found',

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
