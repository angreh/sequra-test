const express   = require( 'express' ),
      router    = express.Router(),
      ctl       = require( '../controllers/sample' )

router.get('/health', ctl.health )

module.exports = router