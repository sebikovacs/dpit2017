const mongoose = require( "mongoose" );
const Chat = mongoose.model( "Chat" );

const extractObject = require( "../utilities" ).extractObject;

exports.create = ( req, res ) => {
    let chat = new Chat( req.body );

    chat.addId( );
    chat.addTimestamp( );
    chat.save( function( err, savedChat ) {
        if ( err ) {
            return res.validationError( err );
        } else {
            return res.success( extractObject(
                savedChat,
                [ "content" ] ) );
        }
    } );
};

exports.getMessages = ( req, res ) => {
    const chat = req.chat;
    const newMsg = req.body.msg;
    const username = req.body.username;

    chat.addContent( newMsg, username );
    chat.save( function( err, savedChat ) {
        if ( err ) {
            return res.validationError( err );
        } else {
            return res.success( );
        }
    } );
};

exports.delete = ( req, res ) => {
    const chat = req.chat;

    chat.remove( );
    res.success( );
};
