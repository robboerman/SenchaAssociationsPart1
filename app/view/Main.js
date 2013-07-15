Ext.define('BaristaStuff.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'BaristaStuff.view.WorkOrder.List',
        'BaristaStuff.view.WorkOrder.Panel'
    ],
    config: {
        // tabBarPosition: 'bottom',
        layout: {
        	type: 'card',
        	animation: 'slide',
        	direction: 'left'
        },

        items: [{
        	xtype: 'workorderList'
        },
        {
        	xtype: 'workorderPanel'
        }]
    }
});
