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
					'<td style="vertical-align: top">Description: </td>',
					'<td >{description}</td>',
				'</tr>',
				'<tr>',
					'<td style="vertical-align: top">Activities: </td>',
					'<td><tpl if="activities.length == 0">No activities logged</tpl><tpl for="activities"><div>- {type}: {comments}</div></tpl></td>',
				'</tr>',
				'<tr>',
					'<td style="vertical-align: top">Logged time: </td>',
					'<td><tpl if="times.length == 0">No time logged</tpl><tpl for="times"><div>- {start:date("H:i")} -  {end:date("H:i")}</div></tpl></td>',
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
	},

	/**
	 * The overridden prepareData function makes sure we use the flattened data array, without object nesting
	 * If we use this we need to fetch the data in the itemTpl with {[values["ServiceRequest.description"]]}
	 */
	prepareData: function(data, index, record) {
		var i;
		var activities = record.getAssociatedRecords('Activity');
		var activityArr = [];
		for (var i=0;i<activities.length;i++) {
			activityArr.push(activities[i].getData());
		}
		data.activities = activityArr;

		var times = record.getAssociatedRecords('Time');
		var timeArr = [];
		for (var i=0;i<times.length;i++) {
			timeArr.push(times[i].getData());
		}
		data.times = timeArr;

		return data;
    }
});
