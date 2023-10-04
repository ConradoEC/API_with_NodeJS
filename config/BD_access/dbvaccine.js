const mysql = require('mysql2')

const dbvaccine = mysql.createConnection({
    host: '85.10.205.173',
    user: 'grupo_a_2ds',
    password: 'site_de_medicina',
    database: 'inter_2ds'
})

// host: '85.10.205.173',
// user: 'grupo_a_2ds',
// password: 'site_de_medicina',
// database: 'inter_2ds'

module.exports = dbvaccine;