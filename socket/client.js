const net = require('net');

const client = net.connect({port:7777, host:'127.0.0.1'}, function(){//default host will be localhost(if we not define)

	client.on('data',function(data){

		console.log("Data is : "+data);

		process.exit();

	});

});
