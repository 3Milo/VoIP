/*
 * This call registers your application to be launched when the browser is ready.
 */

 //Global variable
let selectedNumber = {
	phone: null,
	channels: null,
	type: null,
	note: null,
	index: null
};

//main class
Ext.application({
    name: 'VoIP',
    extend: 'VoIP.Application',

    requires: [
        'VoIP.*' //include all app classes
    ]
});
