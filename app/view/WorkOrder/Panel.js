Ext.define('BaristaStuff.view.WorkOrder.Panel', {
    extend: 'Ext.tab.Panel',
    xtype: 'workorderPanel',
    requires: [
        'BaristaStuff.view.WorkOrder.Details',
        'BaristaStuff.view.WorkOrder.TimeList',
        'BaristaStuff.view.WorkOrder.ActivityList',
        'BaristaStuff.view.WorkOrder.HistoryList'
    ],
    config: {
        tabBarPosition: 'bottom',
        ui: 'light',
        items: [{
			xtype: 'toolbar',
			docked: 'top',
			title: 'Work Order X',
			items: [{
				xtype: 'button',
				action: 'workOrderBack',
				iconCls: 'home',
				ui: 'primary'
			},{xtype: 'spacer'},
			{
				xtype: 'button',
				action: 'workOrderAddItem',
				iconCls: 'add',
				ui: 'primary',
				hidden: true
			}]
		},
		{
        	title: 'Details',
        	iconCls: 'home',
        	xtype: 'workorderDetails'
        },
        {
        	title: 'Logged time',
        	iconCls: 'time',
        	xtype: 'workorderTimeList'
        },
        {
        	title: 'Activities',
        	iconCls: 'activity',
        	xtype: 'workorderActivityList'
        },
        {
        	title: 'History',
        	iconCls: 'history',
        	xtype: 'workorderHistoryList'
        }]
        // layout: {
    }
});
