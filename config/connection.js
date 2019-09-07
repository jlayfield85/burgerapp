var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Explorer98*!',
    database: 'burgers_db'
})

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: "+connection.threadid);
});

modules.exports = connection;