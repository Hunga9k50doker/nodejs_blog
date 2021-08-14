const newsRouter = require('./news');
function route(app){

    app.use('/news', newsRouter);

    app.use('/', newsRouter);

  
 
}

module.exports = route;

