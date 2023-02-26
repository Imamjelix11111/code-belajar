const express = require('express')
const db = require('../connections')
const router = express.Router()


 
router.get('/register', (req, res) => {
  res.render('register.ejs')
})
  
module.exports = router 