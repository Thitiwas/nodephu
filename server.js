const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('Error, wrong token')
})

module.exports = router
