const mysql = require('mysql2')
const Sequelize = require('sequelize')
const sequelize_vaccines = new Sequelize('inter_2ds', 'grupo_a_2ds', 'site_de_medicina', 
{
    host: '85.10.205.173',
    dialect: 'mysql'
})

const vaccines = sequelize_vaccines.define('vaccines', 
{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unsigned: false
    },
    age_vaccine: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: false
    },
    name_vaccine: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date_vaccine: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dose_vaccine: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: false
    },
    max_dose_vaccine: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: false
    },
    reinforc_vaccine: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    counter_reinforc_vaccine: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    everyYear_vaccine: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_vaccines_account: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

module.exports = {sequelize_vaccines, vaccines};

// const dbvaccine = mysql.createConnection({
//     host: '85.10.205.173',
//     user: 'grupo_a_2ds',
//     password: 'site_de_medicina',
//     database: 'inter_2ds'
// })

// host: '85.10.205.173',
// user: 'grupo_a_2ds',
// password: 'site_de_medicina',
// database: 'inter_2ds'

// host: 'sql10.freesqldatabase.com',
// user: 'sql10665993',
// password: 'gyD43pWnva',
// database: 'sql10665993'
