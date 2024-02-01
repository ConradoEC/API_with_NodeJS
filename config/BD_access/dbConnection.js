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

const informations = sequelize.define('informations2', {
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

const newInformations = informations.create({
    title: 'Dipirona',
    image: 'https://i.im.ge/2023/11/28/CSfrb1.154229-dipirona-500mg-30-comprimidos-generico-medley-p547850-z1-637558212986886456-removebg-preview.png',
    summary: 'É um medicamento indicado como analgésico e antitérmico, utilizado no tratamento da dor e da febre. Oferece alívio de 30 a 60 minutos após a ingestão, com efeito sustentando por até 4 horas. Um...',
    mediText: 'É um medicamento indicado como analgésico e antitérmico, utilizado no tratamento da dor e da febre. Oferece alívio de 30 a 60 minutos após a ingestão, com efeito sustentando por até 4 horas.<br>Um dos medicamentos mais populares do Brasil, a dipirona monoidratada também pode ser conhecida como metamizol. O primeiro ponto importante de se destacar sobre a dipirona é que esse é um medicamento isento de prescrição. Isso significa que, para comprá-la na farmácia, você não precisa de receita médica.<br>Se o efeito de uma única dose for insuficiente ou após o efeito analgésico ter diminuído, a dose pode ser repetida respeitando-se o modo de usar e a dose máxima diária, conforme prescrito pelo seu médico.',
    indItem0: 'Resfriados',
    indItem1: 'Dor muscular',
    indItem2: 'Cólicas',
    nIndItem3: 'Alérgicos',
    nIndItem4: 'Gravidez',
    nIndItem5: 'Hipotensos',
})


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