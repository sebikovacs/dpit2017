var socket = io.connect( "http://localhost:3000" );
// socket.emit( "chat message", "something here" );

var chatInput = document.querySelector( ".chat-form input" );
var ENTER_KEY = 13;

var sendMessage = function( evt ) {
    if ( evt.charCode !== ENTER_KEY ) {
        return false;
    }

    socket.emit( "chat message", evt.target.value );
    evt.target.value = "";
}

var appendNewMessage = function( message ) {
    var messageList = document.querySelector( ".chat-messages" );
    var messageTemplate = document.importNode( document.querySelector( ".chat-message-template" ).content, true);
    messageTemplate.querySelector( "p" ).innerText = message;
    messageList.appendChild( messageTemplate );
}


socket.on( "chat message", appendNewMessage )

chatInput.addEventListener( "keypress", sendMessage );
