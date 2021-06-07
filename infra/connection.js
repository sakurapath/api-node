const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8888,
    user: 'root',
    password: 'leandro',
    database: 'agenda-petshop'
})

module.exports = connection