const newsRouter = require('.ư/news');
function route(app){

    app.use('/news', newsRouter);

    app.use('/', newsRouter);

  
 
}

module.exports = route;

