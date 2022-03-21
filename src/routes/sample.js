const express   = require( 'express' ),
      router    = express.Router(),
      ctl       = require( '../controllers/sample' ),
      model     = require( '../models/disbursements' ) // remove this later

router.get('/health', ctl.health )

/**
 * Remove this route later
 */
router.get('/pay', async (req, res ) => {
    await model.pay()
    res.send('payout')
} )

module.exports = router