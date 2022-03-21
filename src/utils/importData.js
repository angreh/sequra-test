const merchants = require('../data/merchants.json'),
      orders    = require('../data/orders.json'),
      shoppers  = require('../data/shoppers.json'),
      config    = require( '../database/knexfile_external' ),
      knex      = require('knex')(config),
      tables    = require( '../utils/tables' ),
      moment    = require( 'moment' )
      


const importData = async () => {
    try {
        merchants.RECORDS.forEach( async item => {
            await knex( tables.MERCHANTS )
                .insert({
                    id: item.id,
                    name: item.name,
                    email: item.email,
                    CIF: item.cif
                })
        })
    } catch(e){
        console.log(e.message)
    }
    shoppers.RECORDS.forEach( async item => {
        try {
            await knex( tables.SHOPPERS )
                .insert({
                    id: item.id,
                    name: item.name,
                    email: item.email,
                    NIF: item.nif
                })
        } catch(e) {
            console.log(e.message)
        }
    })
    orders.RECORDS.forEach( async item => {
        try {
            await knex( tables.ORDERS )
                .insert({
                    id: item.id,
                    merchant_id: item.merchant_id,
                    shopper_id: item.shopper_id,
                    amount: parseFloat( item.amount ),
                    created_at: moment(item.created_at, 'DD/MM/YYYY hh:mm:ss').format('YYYY-MM-DD hh:mm:ss'),
                    completed_at: moment(item.completed_at, 'DD/MM/YYYY hh:mm:ss').format('YYYY-MM-DD hh:mm:ss')
                })
        } catch(e){
            console.log(e.message)
        }
    })
}
importData()