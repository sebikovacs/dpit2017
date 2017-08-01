const mongoose = require( "mongoose" );

const Chat = mongoose.model( "Chat" );

module.exports = function( req, res, next ) {
    const id = req.body.id;
    if ( !id ) {
        return res.preconditionFailed( "missing_id" );
    }

    return Chat.findOne(
        { id },
        function( err, chat ) {
            if( err ) {
                return res.serverError( );
            }
            req.chat = chat;
            return next( );
        } );
};
