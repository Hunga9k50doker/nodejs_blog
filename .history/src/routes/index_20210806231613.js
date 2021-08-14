const newsRouter = require('/news');
function route(app){

    app.use('/news', newsRouter);
    app.get('/', (req, res) => {
  });
  
 
}

module.exports = route;

