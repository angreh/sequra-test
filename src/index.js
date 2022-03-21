const express   = require( 'express' ),
      app       = express(),
      path      = require( 'path' ),
      fs        = require( 'fs' )

app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )

// routes : begin
var dir = path.join(__dirname, 'routes')
fs.readdir(dir, ( err, files )=>{
    if( err ) return console.log( err )
    
    var route
    files.forEach( file => {
        route = file.slice(0, -3)
        app.use( `/${route}`, require(`./routes/${route}`) )
    })
})
app.get( '/', ( req, res ) => {
    res.send( {status:true})
})
// routes : end

app.listen( 8080, () => {
    console.log('Listening on http://localhost:8080/')
})