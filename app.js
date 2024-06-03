/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MeuTeste.Application',

    name: 'MeuTeste',

    requires: [
        // This will automatically load all classes in the MeuTeste namespace
        // so that application classes do not need to require each other.
        'MeuTeste.*'
    ],

    // The name of the initial view to create.
    mainView: 'MeuTeste.view.main.Main'
});
