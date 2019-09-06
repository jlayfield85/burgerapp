var express = require('express');
var exphbs = require('express-handlebars');

var app = experss();
app.use(express.static(_dirname + '/public'));

app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var port = 3000;
app.listen(port);