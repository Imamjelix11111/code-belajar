const express = require('express')
const router = express()


router.get('/blog', (req,res) =>  {
    res.send('ini blog')
  })

  module.exports = router