const express = require('express')
const app = express()

app.get('/about', function (req, res) {
  res.send('Hello World bb')
})

app.listen(3000)