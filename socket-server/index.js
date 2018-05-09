var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8989);



console.log("Test Server")


function handler (req,res,next){
	res.writeHead(200);
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.end("You have made an HTTP req");
}

io.on('connection',function(socket){
	socket.join('test room');
	console.log("connected ");
	
	socket.on('messageEvent', (msg) => {
	  console.log("socket id ", socket.id);	  
	  console.log("msg ", msg);	 
	  io.to(socket.id).emit('response', 'recieve your msg ' + socket.id); 
	});

	socket.on('event2',function(data){
		console.log(" Event2");
		console.log(data);
	});
	
});


