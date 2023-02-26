const express = require('express')
const router = express()


router.get('/timeline', (req,res) =>  {
    res.send('ini timeline')
  })
  
  module.exports = router