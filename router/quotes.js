const express = require('express')
const router = express()

router.get('/quotes', (req,res) => {
    console.log(req.body)
    res.send('ini quotes')
  })
  
  module.exports = router
  