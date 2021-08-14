const express = require('express')
const morgan = require('morgan');
var handlebars = require('express-handlebars');
const app = express();;
const port = 3000;
app.use(morgan('combined'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.get('/trang_chu', (req, res) => {
  res.send('123');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})