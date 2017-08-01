const express = require( "express" );
const bodyParser = require( "body-parser" );

const config = require( "./config" );
const customResponses = require( "./middlewares/customResponses" );

const app = express( );
const port = process.env.PORT || config.port;
const ENV = process.env.NODE_ENV || config.env;

app.set( "env", ENV );

const server = require( "http" ).Server( app );
const io = require( "socket.io" )( server );

io.on( "connection", function( server ){
    console.log('a user connected');

    socket.on( "chat message", function( msg ){
      io.emit( "chat message", msg );
    })  ;
    socket.on('disconnect', function(){
    console.log('user disconnected');
    } );
} );

app.get('/', function( req, res ){
    res.sendFile(__dirname + '/static/src/index.html');
});

require( "./models/user" );
require( "./models/chat" );

app.use( bodyParser.json( ) );
app.use( customResponses );

require( "./config/mongoose" )( app );
require( "./config/routes" )( app );

app.listen( port );
