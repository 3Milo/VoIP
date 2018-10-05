Ext.define('VoIP.view.main.AddWindowController', {
	extend: 'Ext.app.ViewController',
    alias: 'controller.addWindow',

    init: function() {
        Ext.getCmp('add_type').setValue('User');
    },

    onSubmitClick: function () {

    	let validator;

        if(Ext.getCmp('add_phone').getValue() !== null) {

            //change number to string and get its length
            validator = Ext.getCmp('add_phone').getValue().toString().length;
        } else {
            validator = 0;
        }
        
        //if fields are fullfilled correctly
        if ( validator > 8 && validator < 16 ) {
    		
    		//insert new record to store
		    store.insert(0, {
		        phone: Ext.getCmp('add_phone').getValue(),  
		        channels: Ext.getCmp('add_channels').getValue(),  
		        type: Ext.getCmp('add_type').getValue(), 
		        note: Ext.getCmp('add_note').getValue()
		    });

		    //save data to localStorage
		    store.sync();


			//close window
			Ext.getCmp('addWindow').destroy();

		//popups when phone number is incorrect
    	} else if (Ext.getCmp('add_phone').getValue() === null){
    		Ext.Msg.alert('Error', 'Please insert phone number.');
    	} else {
    		Ext.Msg.alert('Error', 'Phone number is too short or too long.');
    	}
    },
});