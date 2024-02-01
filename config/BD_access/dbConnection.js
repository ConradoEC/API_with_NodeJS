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
    title: 'Paracetamol',
    image: 'https://i.im.ge/2023/10/05/NJqjPm.image-removebg-preview-9.png',
    summary: 'Paracetamol é um analgésico e antipirético, sendo indicado para a alívio da dor de intensidade leve a moderada.<br>Podemos encontrar esse medicamento para ser consumido em diversas formas, como por...',
    mediText: 'Paracetamol é um analgésico e antipirético, sendo indicado para a alívio da dor de intensidade leve a moderada.<br>Podemos encontrar esse medicamento para ser consumido em diversas formas, como por exemplo, em gotas, comprimido efervescente, comprimido revestido, comprimido comestível e até em pó para ser preparado com a mistura de algum líquido. <br>O tempo de tratamento usando o medicamento indicado é até o desaparecimento dos sintomas da doença.<br>É importante consultar um médico especialista antes de ingerir o remédio, também é necessário não tomar doses exageradas e desnecessárias do produto e esperar o tempo de ação dos ativos. Assim, o risco de infecção pelo produto e possíveis efeitos colaterais são reduzidos.',
    indItem0: 'Dor de garganta',
    indItem1: 'Dor de dente',
    indItem2: 'Febre alta',
    nIndItem3: 'Doenças no fígado',
    nIndItem4: 'Durante gravidez',
    nIndItem5: 'Doenças sanguíneas',
})
// const newInformations = informations.create({
//     title: '',
//     image: '',
//     summary: '',
//     mediText: '',
//     indItem0: '',
//     indItem1: '',
//     indItem2: '',
//     nIndItem3: '',
//     nIndItem4: '',
//     nIndItem5: '',
// })

// const updateInformations = informations.update({
//     id: 2
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