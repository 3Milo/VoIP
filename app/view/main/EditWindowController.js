Ext.define('VoIP.view.main.EditWindowController', {
	extend: 'Ext.app.ViewController',
    alias: 'controller.editWindow',

    //fullfil all window fields with data from selected record
    init: function() {
    	Ext.getCmp('edit_phone').setValue(selectedNumber.phone);
    	Ext.getCmp('edit_channels').setValue(selectedNumber.channels);
    	Ext.getCmp('edit_note').setValue(selectedNumber.note);
    	if(selectedNumber.type === 'User') {
    		Ext.getCmp('edit_type').setValue('first');
    	} else if (selectedNumber.type === 'Conf. Room') {
    		Ext.getCmp('edit_type').setValue('second');
    	} else if (selectedNumber.type === 'Fax') {
    		Ext.getCmp('edit_type').setValue('third');
    	} else {
    		Ext.getCmp('edit_type').setValue('fourth');
    	}
    },

    onSubmitClick: function() {
    	
    	function setTextOfType(x) {
    		if (x === 'first') {
    			return 'User';
    		} else if(x === 'second') {
    			return 'Conf. Room';
    		} else if (x ==='third') {
    			return 'Fax';
    		} else if (x === 'fourth') {
    			return 'Not in Use';
    		}
    	}

    	//remove selected record
    	store.remove([selectedNumber.index]);

    	//insert new record in place of removed record
    	//(nie znalazlem metody na bezposrednia edycje, moze jest ale nie widzialem)
	    store.insert(selectedNumber.index, {
	        phone: Ext.getCmp('edit_phone').getValue(),  
	        channels: Ext.getCmp('edit_channels').getValue(),  
	        type: setTextOfType(Ext.getCmp('edit_type').getValue()), 
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