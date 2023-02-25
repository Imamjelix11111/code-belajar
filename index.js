// import class obj

const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const db = require('./connections')
const response = require('./response')
const path = require('path')



// set

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//user
app.use('/styles', express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// backend ops

// path/
app.get('/', (req, res)=> {
  res.render('home.ejs')
})



//path register
app.get('/register', (req, res) => {
  res.render('register.ejs')
})

app.post('/register', (req, res) => {
  const  {username, password, email }= req.body
  const sql = `INSERT INTO login (username, password, email) VALUES ('${username}', '${password}', '${email}') `
  db.query(sql, (err, result)=> {
    console.log(result)
    if (err) response(500, "error pak", res)
  })
  res.render('home.ejs')
})



// path blog
app.get('/Blog', (req,res) =>  {
  res.send('ini timeline')
})




// path timeline
app.get('/Timeline', (req,res) =>  {
  res.send('ini timeline')
})




// path quotes
app.get('/Quotes', (req,res) => {
  console.log(req.body)
  res.send('ini quotes')
})



//path about
app.get('/About', (req,res) => {
  console.log(req.body)
  res.send('ini quotes')
  
})



// jalankan backend
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
