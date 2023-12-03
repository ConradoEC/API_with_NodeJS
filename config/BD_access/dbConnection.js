const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'sql10.freesqldatabase.com',
    user: 'sql10665993',
    password: 'gyD43pWnva',
    database: 'sql10665993'
})

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123321',
//     database: 'teste_sql_nodejs'
// })


module.exports = connection





// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('teste_sql_nodejs', 'root', '123321', {
//     host: 'localhost',
//     dialect: 'mysql'
// })

// const fields = sequelize.define('informations', {
//     ID: Sequelize.INTEGER
// });

// module.exports = {
    // Sequelize: Sequelize,
    // sequelize: sequelize,
    // fields: fields
// }