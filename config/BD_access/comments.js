const mysql = require('mysql2')

const comments_connection = mysql.createConnection({
    host: '85.10.205.173',
    user: 'grupo_a_2ds',
    password: 'site_de_medicina',
    database: 'inter_2ds'
})

module.exports = comments_connection