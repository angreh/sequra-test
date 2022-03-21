const model = require( '../models/sample' )

module.exports = {
    async health( req, res ) {
        res.send( model.health() )
    }
}