Ext.define('MeuTeste.model.Stock', {
    extend: 'MeuTeste.model.Base',

    store: 'MeuTeste.store.StockStore',
    fields: [
        {name: 'name', type: 'string'},
        {name: 'priceNow', type: 'float'},
        {name: 'startingPrice', type: 'float'},
        {name: 'diff', type: 'float'},
    ]
});
