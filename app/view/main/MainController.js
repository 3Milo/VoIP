Ext.define('VoIP.view.main.MainController', {
	extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    //buttonClick events
    onAddClick: function () {
    	
    },

    onEditClick: function() {
    	
    },

    onDeleteClick: function() {

    },

    onTap: function(index, target, record, e) { 
    //these are itemtap event default parameters, "e" is the event object, see documentation
        
        //add clicked record data to global variable
        selectedNumber = {
            phone: e.data.phone,
            channels: e.data.channels,
            type: e.data.type,
            note: e.data.note,
            index: target
        }

        //enable buttons after click on grid record,
        if (Ext.getCmp('edit-btn').getDisabled()) {
            Ext.getCmp('edit-btn').setDisabled(false);
            Ext.getCmp('delete-btn').setDisabled(false);
        }
    }
    
});