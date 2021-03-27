const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'my_first_backend',
    user: 'root',
    password: ''
})

module.exports = connection