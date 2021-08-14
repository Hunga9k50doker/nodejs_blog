const newsRouter = require('/news');
function route(app){

    app.use('/news', newsRouter);
    
  app.get('/view', (req, res) => {
    res.render('view');
  });
  
 
}

module.exports = route;

