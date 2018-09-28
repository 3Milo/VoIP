Ext.define('VoIP.view.main.MainController', {
	extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    //buttonClick events
    onAddClick: function () {
    	
    },

    onEditClick: function() {
    	
    },

    onDeleteClick: function() {

        //show popup and remove record when answer is 'yes'
        Ext.Msg.confirm("Confirmation", "Are you sure you want to delete this number?", function(buttonId){
            
            //callback function's parameter has value of clicked button yes/no
            if(buttonId === 'yes') {

                //remove record from store 
                store.remove([selectedNumber.index]);

                //synchronize data with localStorage
                store.sync();

                //disable edit and delete buttons
                Ext.getCmp('edit-btn').setDisabled(true);
                Ext.getCmp('delete-btn').setDisabled(true);
            }
        });
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