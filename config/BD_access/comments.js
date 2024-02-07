const Sequelize = require('sequelize')
const sequelize_comments = new Sequelize('inter_2ds', 'grupo_a_2ds', 'site_de_medicina', {
    host: '85.10.205.173',
    dialect: 'mysql'
})

sequelize_comments.authenticate().then(function(){
    console.log("Conexão bem estabelecida")
}).catch(function(){
    console.log("A conexão não foi estabelecida por causa do erro: " + error)
})

const comments = sequelize_comments.define('', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    comment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    comment_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    comment_text: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    comment_date: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = {sequelize_comments, comments};

// const mysql = require('mysql2')

// const comments_connection = mysql.createConnection({
//     host: '85.10.205.173',
//     user: 'grupo_a_2ds',
//     password: 'site_de_medicina',
//     database: 'inter_2ds'
// })

// module.exports = comments_connection