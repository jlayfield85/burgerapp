var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/',routes);

var port = 3000;
app.listen(port);