const newsRouter = require('./news');
const courseRouter = require('./course');

const siteRouter = require('./site');
function route(app){

    app.use('/news', newsRouter);

    app.use('/', siteRouter);

  
 
}

module.exports = route;

