const express = require('express')
const router = express.Router()
const app = express()
router.get('/', function (req, res) {
  res.send('Error, wrong token')
})

app.set('port', (process.env.PORT || 5000))
app.get('/', function (req, res) {
  res.send('<h1 align="center">Phureerak</h1>')
})
app.listen(app.get('port'), function () {
  console.log('running on port', app.get('port'))
})

module.exports = router
