Ext.define('VoIP.view.main.Main', {
	extend: 'Ext.container.Container',
	requires: 'Ext.Button',

	controller: 'main',

	items: [{
		xtype: 'button',
		text: 'Add',
		id: 'add-btn',
		handler: 'onAddClick'
	}, {
		xtype: 'button',
		text: 'Edit',
		id: 'edit-btn',
		handler: 'onEditClick'
	}, {
		xtype: 'button',
		text: 'Delete',
		id: 'delete-btn',
		handler: 'onDeleteClick'
	}, {
		xtype: 'grid',
		store: store,

	    columns: [
	        { text: 'Phone',  dataIndex: 'phone', width: '30%' },
	        { text: 'Channels', dataIndex: 'channels', width: '15%' },
	        { text: 'Type', dataIndex: 'type', width: '20%' },
	        { text: 'Note', dataIndex: 'note', width: '35%' }
	    ],

	    height: 300,
	    layout: 'fit',
	    fullscreen: false
		}]
});