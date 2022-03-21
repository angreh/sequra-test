const config    = require( '../database/knexfile' ),
      knex      = require('knex')(config),
      tables    = require( '../utils/tables' )

module.exports = {
    async pay() {
        let disbursements
        try {
            disbursements = await knex( tables.ORDERS )
                .where('completed_at', '<>', "")
                .andWhere(knex.raw('completed_at IS NOT NULL'))
                .andWhere('paid', '=', 0)
                .groupBy('merchant_id')
                .select(
                    'merchant_id',
                    knex.raw('SUM(amount) as amount'),
                    knex.raw('GROUP_CONCAT(id) as orders')
                )
        } catch(e){
            console.log(e.message)
        }

        if(!disbursements) return false

        const disbursementsLength = disbursements.length
        for( let i = 0; i < disbursementsLength; i++ ){
            disbursement = disbursements[i]
            await knex( tables.DISBURSEMENTS )
                .insert({
                    merchant_id: disbursement.merchant_id,
                    amount: disbursement.amount,
                    paid_at: knex.fn.now()
                })

            await knex( tables.ORDERS )
                .update({
                    paid: true
                })
                .whereIn('id',disbursement.orders.split(','))

        }
    }
}