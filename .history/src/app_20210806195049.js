const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();;
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(ur)
//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars({
  extname: ".hbs", //define tail
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources\\views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search', (req, res) => {
  res.send(' ');
});

app.get('/view', (req, res) => {
  res.render('view');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})