var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));

var routes = require('./controllers/burgers_controller.js');
app.use('/',routes);

var port = 3000;
app.listen(port);