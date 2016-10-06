var express = require('express');
var path = require('path');

var PORT = process.env.NODE_PORT || 8081;
var app = express();

app.use(express.static(path.resolve('./', 'public')));
app.set('port', PORT);

app.listen(PORT, function(err) {
	if (err) { throw err; }
	console.log('express: listening on port', PORT);
});