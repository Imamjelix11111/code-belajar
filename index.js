// import class obj
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connections')
const response = require('./response')
const path = require('path')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

//import router
const routerHome = require('./router/home.js')
const routerAbout = require('./router/about.js')
const routerBlog = require('./router/blog.js')
const routerQuotes = require('./router/quotes.js')
const routerTimeline = require('./router/timeline.js')
const routerRegister = require('./router/register.js')
const routerLogin = require('./router/login.js')



// set

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//use
app.use('/styles', express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//test



//pemanggilan router
app.use(routerHome)
app.use(routerAbout)
app.use(routerTimeline)
app.use(routerQuotes)
app.use(routerBlog)


app.use(routerLogin)
app.post('/login', (req, res) => {
  
})


// path register
app.use(routerRegister)
app.post('/register', (req, res) => {
  const {username, email, password} = req.body
  const sql = `INSERT INTO users (id, username, email, password) VALUES ( NULL, '${username}', '${email}', '${password}' )`
  db.query(sql, (err,result) => {
    if (err) response(500, "data gak masuk", res)
  })
  res.redirect('/listdata')
})

app.put('/listdata', (req, res) => {
  const {id, username, email, password} = req.body
  const sql = `UPDATE users SET username = '${username}', email = '${email}', password = '${password}' WHERE id = ${id}`
  db.query(sql, (err, result) => {
    if (err) response(500, "data gagal diubah", res)
  })
  res.redirect('/listdata')
})


app.get('/listdata', (req, res) => {
  const sql =  `SELECT * FROM users`
  db.query(sql, (err,field) => {
    console.log(field)
    res.render('listdata.ejs')
  })
  })

// jalankan backend
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})