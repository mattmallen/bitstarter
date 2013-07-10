var express = require('express');
var fs = require('fs');
var Buffer = require('Buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var resp = fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err;
  return data;
});

  response.send(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
