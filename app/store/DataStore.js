//define data model
Ext.define('DataModel', {
    fields: ['phone', 'channels', 'type', 'note'],
    extend: 'Ext.data.Model',
    proxy: {
        type: 'localstorage',
        id  : 'search'
    }
});

//define data store
Ext.define('VoIP.store.DataStore', {
    model: 'DataModel',
    extend: 'Ext.data.Store',
    alias: 'store.dataStore',
    storeId: 'DataStore',
});

//create data store
let store = Ext.create('VoIP.store.DataStore');


//loads any existing data from localStorage
store.load();


//add some data when grid is empty (not necessary, just for demonstration)
if (store.getData().items.length === 0) {
    store.add({ 
        phone: '5345345234',  
        channels: 12,  
        type: "Fax", 
        note: 'Local Fax'
    }, { 
        phone: '1342356232',  
        channels: 8,  
        type: "Not in Use", 
        note: 'Bob\'s previous phone'
    }, { 
        phone: '5674528724', 
        channels: 20,  
        type: "User", 
        note: 'Your mom\'s phone'
    });
}

//save data to localStorage
store.sync();