const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const handlebars = require('express-handlebars')



const app = express()
const PORT = 3000

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(process.env.PORT ? Number(process.env.PORT) : PORT, () => 
{
  console.log('Express started at http://localhost:3000')
})

// app.use((req, res, next) => 
// {
//   res.header("Access-Control-Allow-Origin", '*');
//   app.use(cors());
//   next();
// });