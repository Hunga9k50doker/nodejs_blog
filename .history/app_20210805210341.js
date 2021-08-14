const express = require('express')
const mor = require('express')

const app = express()
const port = 3000

app.get('/tin_tuc', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})