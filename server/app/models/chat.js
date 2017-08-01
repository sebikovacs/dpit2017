const mongoose = require( "mongoose" );
const uid = require( "uid" );
const Schema = mongoose.Schema;

const contentSchema = mongoose.Schema( {
    message: String,
    username: String,
    sent: Date,
} );

const chatSchema = mongoose.Schema({
    created: Date,
    content: { type: [ contentSchema ], default: [ ] },
    user1: String,
    user2: String,
    id: String,
} );

chatSchema.methods.addId = function( password ) {
    return this.id = uid( password );
};

chatSchema.method.addTimestamp = function( ) {
    return this.created = new Date( );
};

chatSchema.method.addContent = function( msg, username ) {
    const content = { msg, username }
    content.sent = new Date( );
    return this.content.push( content );
};

module.exports = mongoose.model( "Chat", chatSchema );
