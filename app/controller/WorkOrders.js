Ext.define('BaristaStuff.controller.WorkOrders', {
	extend: 'Ext.app.Controller',
	
	requires: [
		'Ext.MessageBox'
	],
	config: {
		refs: {
			main: 'main',
			workOrderDetails: 'workorderDetails',
			workorderHistoryList: 'workorderHistoryList',
			workOrderPanel: 'workorderPanel'
		},
		
		control: {
			'button[action="workOrderBack"]': {
				tap: 'showWorkOrderList'
			},
			'workorderList': {
				select: 'onSelectWorkOrder'
			},
			workOrderPanel: {
				activeitemchange: 'onWorkOrderPanelChange'
			},
			'button[action="workOrderAddItem"]': {
				tap: 'onAddItemTap'
			}
		}
	},
	
	init: function() {
	},
	
	showWorkOrderList: function() {
		this.getMain().animateActiveItem(0,{type:'slide',reverse:true});
	},

	onAddItemTap: function() {
		Ext.Msg.alert('TODO','I guess you will have to implement this yourself :)');
	},

	onWorkOrderPanelChange: function(layout, newItem, oldItem) {
		switch (newItem.xtype) {
			case 'workorderTimeList':
			case 'workorderActivityList':
				this.getWorkOrderPanel().down('button[action="workOrderAddItem"]').setHidden(false);
			break;
			default:
				this.getWorkOrderPanel().down('button[action="workOrderAddItem"]').setHidden(true);
			break;
		}
	},

	onSelectWorkOrder: function(list, record) {
		var detailPanel = this.getWorkOrderDetails();
		detailPanel.setValues(record.getFlattenedData(true));
		detailPanel.getScrollable().getScroller().scrollTo(0,0);

		var activityStore = Ext.getStore('Activities');
		activityStore.clearFilter();
		activityStore.filter('workOrderId',record.get('id'));

		var timeStore = Ext.getStore('Times');
		timeStore.clearFilter();
		timeStore.filter('workOrderId',record.get('id'));


		var workOrderPanel = this.getWorkOrderPanel();
		workOrderPanel.down('toolbar').setTitle('Work order '+record.get('id')+' ('+record.get('ServiceRequest').status+')');
		workOrderPanel.setActiveItem(0);

		var historyList = this.getWorkorderHistoryList();
		var installedProduct = record.getAssociatedRecords('InstalledProduct'); // Traverse up to get the parent InstalledProduct
		var historyRecords = installedProduct[0].getAssociatedRecords('ServiceRequest'); // Traverse down to get all Service requests

		for (var i=historyRecords.length-1;i>=0;i--) {
			if (historyRecords[i].get('id') === record.get('ServiceRequest').id) {
				historyRecords.splice(i,1);
			}
		}

		var historyStore = historyList.getStore();
		historyStore.removeAll();
		historyStore.add(historyRecords);
		// historyList.

		this.getMain().animateActiveItem(1,{type:'slide',reverse:false});	
	}

});