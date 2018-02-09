// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

        window.sqlitePlugin.echoTest(function () {
            console.log('ECHO test OK');
        });

        window.sqlitePlugin.selfTest(function () {
            console.log('SELF test OK');
        });

        /*
        var db = window.sqlitePlugin.openDatabase({ name: "nistAppDB.db", androidDatabaseImplementation: 2, location: 'default', createFromLocation: 1 });
        db.transaction(function (tx) {
            tx.executeSql('SELECT count(*) AS mycount FROM table2', [], function (tx, rs) {
                console.log('Record count: ' + rs.rows.item(0).mycount);
            }, function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
        });
        */

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();