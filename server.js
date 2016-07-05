'use strict';

var express = require('express');

const app = express();

app.enable('trust proxy');

app.get('/', function(req, res){
  // Get the user's operating system information by isolating a portion of the user agent header
  var userSoftware = req.headers['user-agent'].split('(')[1].split(') ')[0];
  
  // Get the user's IP, first preferred language, and the userSoftware variable from above and return them in a JSON object
  res.json({
    ipaddress: req.ip,
    language: req.acceptedLanguages[0],
    software: userSoftware
  });
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});