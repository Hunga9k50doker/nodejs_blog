const newsRouter = require('/news');
function route(app){

    app.use('/news', newsRouter);
    
    app.use('/', (req, res) => {
  });
  
 
}

module.exports = route;

