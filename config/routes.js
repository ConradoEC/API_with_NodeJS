const express = require('express')
const routes = express.Router()
const mysql =  require('mysql2')
const connection = require('./BD_access/dbConnection.js')
const comments_connection = require('./BD_access/comments.js')
const dbvaccine = require('./BD_access/dbvaccine.js')




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
    console.log(result);
    console.log('deu certo')
})

routes.post('/form', (req, res) =>
{
  const commentBody = req.body.body
  const commentId = req.body.id_do_comentário
  const userName = req.body.nome_do_usuario
  const userLastName = req.body.sobrenome_do_usuario
  const userId = req.body.id_do_usuario
  // res.send(req.body.body + req.body.id_do_comentário)
  const data = new Date()
  const day = String(data.getDate()).padStart(2,'0')
  const month = String(data.getMonth() + 1).padStart(2,'0')
  const year = data.getFullYear()
  const dataAtual = `${year}-${month}-${day}`
  comments_connection.query(`INSERT INTO comments(comment_id, comment_name, comment_text, comment_date, id_user) VALUES (${commentId}, "${userName} ${userLastName}", ${JSON.stringify(commentBody)}, "${dataAtual}", ${userId})`)
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
