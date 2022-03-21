const config    = require( '../database/knexfile' ),
      knex      = require('knex')(config),
      tables    = require( '../utils/tables' )

module.exports = {
    async getMerchantDisbursements( merchantID ) {
        let disbursements
        try {
            disbursements = await knex( tables.DISBURSEMENTS )
                .where('merchant_id', merchantID )
        } catch(e){
            console.log(e.message)
        }

        if(!disbursements) return false

        return disbursements
    },
    async getAllDisbursements(){}
}