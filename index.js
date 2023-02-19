const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const db = require('./connections')
const response = require('./response')

app.use(bodyParser.json())

app.get('/listdata', (req, res) => {
  const sql = `SELECT * FROM brother`

  db.query(sql, (error, result) => {
  response(200, "nih data", res) 
  })
})

app.get('/brother', (req, res) => {
  const brother = `SELECT * FROM brother`
  db.query(brother, (err, fields) => {
    if (err) throw err
    response(200, fields, res)
  })
})
app.get('/brother/:Nomor', (req,res) => {
  const Nomor = req.params.Nomor
  const sql = `SELECT Nomor FROM brother WHERE Nomor = ${Nomor}`
  db.query(sql, (err, fields) => {
    response (200, fields, res)
  })
})
app.get('/find', (req, res) =>  {
  const find = `SELECT Nama_Lengkap FROM brother WHERE Nama_Lengkap = ${req.query.Kelas}`
 
  db.query(find, (error, result) => {
    response(200, "find data brother", res)
  })
})

app.get('/blog', (req, res) => {
  response(200, 'Ini', res)
})


app.get('/resume', (req,res) =>  {
  response(200, 'Ini Resume',  res)
})


app.post('/login', (req,res) => {
    console.log(req.body)
    response(200, 'login berhasil', res)
})

app.post('/regist', (req,res) => {
  console.log(req.body)
  response(200, 'form regist', res)
})


app.delete('/', (req,res) => {
  response(200,'update berhasil',res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})