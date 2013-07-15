Ext.define('BaristaStuff.store.Activities', {
	extend: 'BaristaStuff.store.BaseStore',

	config: {
		model: 'BaristaStuff.model.Activity',

		data: [{
			id: 1,
			workOrderId: 1,
			type: 'Pump de-calcified',
			comments: 'Pump internals were very calcified. decalicfied whole group.'
		},
		{
			id: 2,
			workOrderId: 1,
			type: 'Installed new boiler',
			comments: 'The boiler was broken....'
		}
		]
	}
});