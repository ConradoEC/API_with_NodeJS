
const mysql = require('mysql2')

const comments_connection = mysql.createConnection({
    host: 'monorail.proxy.rlwy.net',
    user: 'postgres',
    password: 'c6bca2fFc4*cC5Ecgd53Gd62Bga2EbCe',
    database: 'railway'
})

module.exports = comments_connection