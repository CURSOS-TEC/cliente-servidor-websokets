var socket = io.connect('http://localhost:8989')

socket.on('msg_received',function(data){
	console.log(data);
});

function sendMessage(){
	var userId = document.getElementById("idInput").value;
	var message = document.getElementById("messageInput").value;
	socket.emit('message',{ id: userId, msg : message});
}