const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const Login = require('./models/login')
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
// post、put會用到，跟資料庫請求、寫入所需要的解析。
app.use(express.urlencoded({ extended: true }))

require('./config/mongoose')

app.get('/', (req, res) => {
  res.render('index')
})

// 輸入帳號密碼核對
app.post('/', (req, res) => {
  const enterEmail = req.body.email
  const enterPassword = req.body.password
  Login.findOne({ email: enterEmail })
    .lean()
    .then((data) => {
      if (data && data.password === enterPassword) {
        const userName = data.firstName
        res.render('index', { userName })
      }
      else {
        res.render('index', { data })
      }
    })
})

app.listen(3000, () => {
  console.log('In port 3000 now!')
})
