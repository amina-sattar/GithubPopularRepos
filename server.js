const express = require('express')


const  dotenv = require('dotenv')

const routes = require('./routes')


dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(routes)

app.get('/', (req, res) => res.send('App is working'))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})