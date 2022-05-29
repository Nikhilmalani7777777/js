const net  = require('net');

const server = net.createServer(function(c){

	console.log("Client connected!!!");

	c.write("Welcome from server!!!");

	c.on('end', function(){

		console.log("Client disconnected!!!");

		process.exit();

	});

});



server.listen(7777, function(){

	console.log("Server listening...");

});
