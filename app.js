/*
 * This call registers your application to be launched when the browser is ready.
 */


//main class
Ext.application({
    name: 'VoIP',
    extend: 'VoIP.Application',

    requires: [
        'VoIP.*' //include all app classes
    ]
});
