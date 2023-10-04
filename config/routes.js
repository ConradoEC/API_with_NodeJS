const express = require('express')
const routes = express.Router()
const mysql =  require('mysql2')
const connection = require('./BD_access/dbConnection')
const comments_connection = require('./BD_access/comments')
const dbvaccine = require('./BD_access/dbvaccine')




routes.get('/bd', (req, res) =>
{
    connection.query('SELECT * FROM informations', (err, result) => 
    {
        return res.json(result);
    })
})

routes.get('/form', (req, res) =>
{
    res.render('forms')
})

routes.get('/form/takeData', (req, res) =>
{
    comments_connection.query('SELECT * FROM comments', (err, result) => 
    {
        return res.json(result);
    })
})

routes.get('/vaccine', (req, res) =>
{
    dbvaccine.query('SELECT * FROM vaccines', (err, result) =>
    {
        return res.json(result);
    })
    console.log('deu certo')
})

routes.post('/form', (req, res) =>
{
  const commentBody = req.body.body
  const commentId = req.body.id_do_comentário
  // res.send(req.body.body + req.body.id_do_comentário)
  const data = new Date()
  const day = String(data.getDate()).padStart(2,'0')
  const month = String(data.getMonth() + 1).padStart(2,'0')
  const year = data.getFullYear()
  const dataAtual = `${year}-${month}-${day}`
  comments_connection.query(`INSERT INTO comments(comment_id, comment_name, comment_text, comment_date) VALUES (${commentId}, "Erick  Conrado", ${JSON.stringify(commentBody)}, "${dataAtual}")`)
})

routes.post('/vaccine', (req, res) =>
{
    // const urlParams = new URLSearchParams(window.location.search)
    // const vaccine_id = urlParams.get('id')
    const vaccineId = req.body.vaccine_id
    const vaccine_date = req.body.vaccine_date
    const vaccine_newMax_dose = req.body.vaccine_newMax_dose
    const vaccine_reinforc = req.body.vaccine_reinforc

    dbvaccine.query(`UPDATE vaccines SET date_vaccine = '${vaccine_date}', dose_vaccine = ${vaccine_newMax_dose}, counter_reinforc_vaccine = ${vaccine_reinforc} WHERE id_vaccine = ${vaccineId}`)
})



// const fields = require('./dbConnection')


// sequelize.authenticate().then(() => 
// {
//     console.log('Conexão estabelecida')
// }).catch((erro) =>
// {
//     console.log('O problema foi: ' + erro)
// })



























// routes.get('/field', (req, res) =>
// {
//     fields.findAll().then(function(field)
//     {
//         res.send(field)
//     })
// })


// let db = 
// [
//   {
//       "title": "Dipirona",
//       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWtdyWG2tpPqFXzLtLDMPRRTAVDvtLDWZtFwkxE1K&s",
//       "summary": "{Item 0} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...",
//       "text": "{Item 0} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...{Item 2} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...",
//       "listIND": {"item0": "item0", "item1": "item1", "item2": "item2"},
//       "listDESEN": {"item0": "item3", "item1": "item4", "item2": "item5"},
//       "id": 0
//   },

//   {

//       "title": "Paracetamol",
//       "image": "https://th.bing.com/th?id=OIP.KnODXJGk7FZNSedLsNR4OAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
//       "summary": "{Item 1} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...",
//       "text": "{Item 1} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...{Item 2} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...",
//       "listIND": {"item0": "item0", "item1": "item1", "item2": "item2"},
//       "listDESEN": {"item0": "item3", "item1": "item4", "item2": "item5"},
//       "id": 1
//   },

//   {
//       "title": "Ibuprofeno",
//       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTGr9CytplTUPvR4zKP6iVgXWTOpV88jPFA&usqp=CAU",
//       "summary": "{Item 2} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...",
//       "text": "{Item 2} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...{Item 2} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...",
//       "listIND": {"item0": "item0", "item1": "item1", "item2": "item2"},
//       "listDESEN": {"item0": "item3", "item1": "item4", "item2": "item5"},
//       "id": 2
//   },

//   {
//       "title": "Dorflex",
//       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6apSEXBN--uSIHcaaa_bS5UTiXFcnyyODIcs_jTzLSrGdkYeA5in61JnwDmXfdGMqro&usqp=CAU",
//       "summary": "{Item 3} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...",
//       "text": "{Item 3} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...{Item 2} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...",
//       "listIND": {"item0": "item0", "item1": "item1", "item2": "item2"},
//       "listDESEN": {"item0": "item3", "item1": "item4", "item2": "item5"},
//       "id": 3
//   },

//   {
//       "title": "Novalgina",
//       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthJMB9AbWG6ilsCctsYjpch3j4sSQICbsfA&usqp=CAU",
//       "summary": "{Item 4} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...",
//       "text": "{Item 4} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...{Item 2} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...",
//       "listIND": {"item0": "item0", "item1": "item1", "item2": "item2"},
//       "listDESEN": {"item0": "item3", "item1": "item4", "item2": "item5"},
//       "id": 4
//   },

//   {
//       "title": "Tarja preta",
//       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkoEtzP_QG-lDkwmXNDWCB-lsqLn89XZ2SQg&usqp=CAU",
//       "summary": "{Item 5} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...",
//       "text": "{Item 5} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...{Item 2} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...",
//       "listIND": {"item0": "item0", "item1": "item1", "item2": "item2"},
//       "listDESEN": {"item0": "item3", "item1": "item4", "item2": "item5"},
//       "id": 5
//   },

//   {
//       "title": "A delicia da sarah",
//       "image": "https://i.im.ge/2023/08/26/mfjV21.20230317-124445.jpg",
//       "summary": "{Item 6} minha cura da depressão",
//       "text": "{Item 6} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...{Item 2} dolor sit amet consectetur, adipisicing elit. Commodi explicabo eveniet debitis velit qui dignissimos iste, aut, laborum suscipit exercitationem, obcaecati eum maiores alias. Illum, sunt...",
//       "listIND": {"item0": "item0", "item1": "item1", "item2": "item2"},
//       "listDESEN": {"item0": "item3", "item1": "item4", "item2": "item5"},
//       "id": 6
//   }
// ] 

// AQUI FOI PASSADO UM PARÂMETRO, O "ID" REPRESENTA ALGUM ID DENTRO DO ARRAY
routes.delete('/:id', (req, res) => 
{
    const id = req.params.id 

    let newDB = db.filter(item =>
    {
        if(!item[id])
        {
            return item
        }
    })

    db = newDB
    
    return res.send(newDB)
})


module.exports = routes
