const express = require('express')
const router = express()


router.get('/about', (req,res) => {
    console.log(req.body)
    res.send('ini about')
    
  })
  
  module.exports = router