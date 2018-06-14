const MYSQL = require('mysql');
const CONN = MYSQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ba66age',
    database: 'travelDatabase'
});
module.exports = CONN;