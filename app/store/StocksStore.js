Ext.define('MeuTeste.store.StocksStore', {
    extend: 'Ext.data.Store',
    alias: 'store.StocksStore',
    model: 'MeuTeste.model.Stock',
    autoLoad: true,
    fields: [
        {name: 'name'},
        {name: 'priceNow'},        
        {name: 'diff'},
    ],
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        url: 'http://localhost:5096/stock' // TODO adjust
    }
});
