const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'FirstDate97',
    database: 'employees_db'
},console.log('Connected to Database')
);

db.connect(function(err){
    console.log(err);
    if (err) throw err;
});

module.exports = db;
