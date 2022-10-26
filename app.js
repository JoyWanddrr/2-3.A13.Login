const express = require('express')
const app = express()

const exphbs = require('express-handlebars')

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

require('./config/mongoose')

app.get('/', (req, res) => {
  res.send('xxxxxxxxxxx')
})

app.listen(3000, () => {
  console.log('In port 3000 now!')
})
