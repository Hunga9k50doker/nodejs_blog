const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');


const route = require('./routes');
const db= require('./config/db');

const app = express();;
const port = 3000;




app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended:true,
}));// middleware

app.use(express.json());// xml,fetch,axios
//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars({
  extname: ".hbs", //define tail
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
