var socket = require('socket.io-client')('http://localhost:8989');
socket.on('connect', function(){
	console.log("client connected")
	socket.emit('messageEvent',{ id: 12345, msg : 'message'});
	
});
socket.on('messageEvent', function(data){
	console.log("message")
});

socket.on('response', (data) => {
  console.log(" Hey ", data);
  socket.emit('event2',{ data : "data2" });

});


socket.on('disconnect', function(){});