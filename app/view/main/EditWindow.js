//window for editing record
Ext.define('VoIP.view.main.EditWindow', {
	extend: 'Ext.window.Window',
    controller: 'editWindow',
    id: 'editWindow',
    
    title: 'Edit number',
    closable: true,
    scrollable: true,
    items: [{
    	xtype: 'numberfield',
        label: 'Phone Number',
        id: 'edit_phone',
        disabled: true //number can't be changed
    }, {
    	xtype: 'sliderfield',
        label: 'Channels',
        id: 'edit_channels',
        html: '2',
        minValue: 2,
        maxValue: 20,
        increment: 1,
        listeners: {
            //show value selected on slider after value change
        	change: function() {
        		this.setHtml(this.getValue());
        	}
        }
    }, {
    	xtype: 'selectfield',
        label: 'Type',
        id: 'edit_type',
        options: [{
            text: 'User',
            value: 'first'
        }, {
            text: 'Conf. Room',
            value: 'second'
        }, {
            text: 'Fax',
            value: 'third'
        }, {
        	text: 'Not in Use',
        	value: 'fourth'
        }] 
    }, {
    	xtype: 'textfield',
    	label: 'Note',
        id: 'edit_note'
    }, {
    	xtype: 'button',
    	text: 'Submit',
    	iconCls: 'x-fa fa-check',
    	width: '100%',
        handler: 'onSubmitClick'
    }]
});