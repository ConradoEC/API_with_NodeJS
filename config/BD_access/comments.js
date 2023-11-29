
const mysql = require('mysql2')

const comments_connection = mysql.createConnection({
    host: '52.8.112.233',
    user: 'sql10665993',
    password: 'gyD43pWnva',
    database: 'sql10665993'
})

module.exports = comments_connection