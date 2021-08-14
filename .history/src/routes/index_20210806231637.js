const newsRouter = require('/news');
function route(app){

    app.use('/news', newsRouter);

    app.use('/news', newsRouter);

  
 
}

module.exports = route;

