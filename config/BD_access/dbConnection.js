const Sequelize = require('sequelize')
const sequelize = new Sequelize('inter_2ds', 'grupo_a_2ds', 'site_de_medicina', {
    host: '85.10.205.173',
    dialect: 'mysql'
})


sequelize.authenticate().then(function()
{
    console.log("Conexão bem estabelecida")
}).catch(function(error)
{
    console.log("A conexão não foi estabelecida por causa do erro: " + error)
})

const informations = sequelize.define('informations', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    summary: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    mediText: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    indItem0: {
        type: Sequelize.STRING,
        allowNull: false
    },
    indItem1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    indItem2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nIndItem3: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nIndItem4: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nIndItem5: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
})

// const newInformations = informations.create({

// })


module.exports = {sequelize, informations}

// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: '85.10.205.173',
//     user: 'grupo_a_2ds',
//     password: 'site_de_medicina',
//     database: 'inter_2ds'
// })

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123321',
//     database: 'teste_sql_nodejs'
// })





// module.exports = {
    // Sequelize: Sequelize,
    // sequelize: sequelize,
    // fields: fields
// }