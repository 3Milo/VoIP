Ext.define('VoIP.view.main.EditWindowController', {
	extend: 'Ext.app.ViewController',
    alias: 'controller.editWindow',

    //fullfil all window fields with data from selected record
    init: function() {
    	Ext.getCmp('edit_phone').setValue(selectedNumber.phone);
    	Ext.getCmp('edit_channels').setValue(selectedNumber.channels);
    	Ext.getCmp('edit_note').setValue(selectedNumber.note);
    	Ext.getCmp('edit_type').setValue(selectedNumber.type);
    },

    onSubmitClick: function() {
    	
    	//remove selected record
    	store.remove([selectedNumber.index]);

    	//insert new record in place of removed record
	    store.insert(selectedNumber.index, {
	        phone: Ext.getCmp('edit_phone').getValue(),  
	        channels: Ext.getCmp('edit_channels').getValue(),  
	        type: Ext.getCmp('edit_type').getValue(), 
	        note: Ext.getCmp('edit_note').getValue()
	    });
	    //save data to localStorage
	    store.sync();

    	//close window
        Ext.getCmp('editWindow').destroy();

        //disable edit and delete buttons
        Ext.getCmp('edit-btn').setDisabled(true);
        Ext.getCmp('delete-btn').setDisabled(true); 
    }
});