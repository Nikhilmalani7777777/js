const net = require('net');

const client = net.connect({port:7777}, function(){

	client.on('data',function(data){

		console.log("Data is : "+data);

		process.exit();

	});

});
