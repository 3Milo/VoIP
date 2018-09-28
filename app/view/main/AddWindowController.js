Ext.define('VoIP.view.main.AddWindowController', {
	extend: 'Ext.app.ViewController',
    alias: 'controller.addWindow',

    onSubmitClick: function () {
    	
    	//get value from selectfield and set proper text
    	//(nie znalazlem metody zeby pobrac tekst, wiec pobieram wartosc i na jej podstawie ustalam tekst :/)
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

    	//if fields are fullfilled correctly
    	if (Ext.getCmp('add_phone').isValid() && Ext.getCmp('add_phone').getValue() !== null) {
    		
    		//insert new record to store
		    store.insert(0, {
		        phone: Ext.getCmp('add_phone').getValue(),  
		        channels: Ext.getCmp('add_channels').getValue(),  
		        type: setTextOfType(Ext.getCmp('add_type').getValue()), 
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

        //close window
		Ext.getCmp('addWindow').destroy(); 
    },
});