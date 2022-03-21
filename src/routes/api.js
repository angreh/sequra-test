const express   = require( 'express' ),
      router    = express.Router(),
      ctl       = require( '../controllers/api' )

router.get(
    '/disbursements/:merchant_id',
    ctl.getMerchantDisbursements
)
router.get('/disbursements', ctl.getAllDisbursements )

module.exports = router