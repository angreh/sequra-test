const model = require( '../models/api' )

module.exports = {
    async getMerchantDisbursements( req, res ) {
        res.send(
            await model.getMerchantDisbursements( req.params.merchant_id ) 
        )
    },
    async getAllDisbursements( req, res ) {
        res.send( model.getAllDisbursements() )
    },
}