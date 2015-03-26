var express = require('express');
var path = require('path');

var server = express();
server.use(express.static(__dirname + '/dist'));
server.use(express.static(path.join(__dirname, 'dist')));

server.route('/([a-zA-Z0-9-_]+/?)+')
	.get(function(req, res) {
		console.log('Incoming request: ' + req.path);
	    res.sendFile(__dirname + '/dist/index.html');
	});

var port = 8088;
server.listen(port, function() {
    console.log('Server listening on port: ' + port);
});