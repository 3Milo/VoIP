//window for adding new record
Ext.define('VoIP.view.main.AddWindow', {
	extend: 'Ext.window.Window',
    controller: 'addWindow',
    id: 'addWindow',
    
    title: 'New number',
    closable: true,
    scrollable: true,
    items: [{
    	xtype: 'numberfield',
        label: 'Phone Number',
        id: 'add_phone',
        validators: /^[0-9]{8,16}$/ //niepotrzebne to [0-9] bo juz i tak tylko numery mozna wpisywac, ale jakos bez tego nie dziala ;/
    }, {
    	xtype: 'sliderfield',
        label: 'Channels',
        id: 'add_channels',
        html: '2',
        minValue: 2,
        maxValue: 20,
        increment: 1,
        value: 2,
        listeners: {
        	change: function() {
        		this.setHtml(this.getValue());
                //show value selected on slider
        	}
        }
    }, {
    	xtype: 'selectfield',
        label: 'Type',
        id: 'add_type',
        value: 'first',
        options: [{
            text: 'User',
            value: 'User'
        }, {
            text: 'Conf. Room',
            value: 'Conf. Room'
        }, {
            text: 'Fax',
            value: 'Fax'
        }, {
        	text: 'Not in Use',
        	value: 'Not in Use'
        }] 
    }, {
    	xtype: 'textfield',
    	label: 'Note',
        id: 'add_note'
    }, {
    	xtype: 'button',
    	text: 'Submit',
    	iconCls: 'x-fa fa-check',
    	width: '100%',
        handler: 'onSubmitClick'
    }]
});