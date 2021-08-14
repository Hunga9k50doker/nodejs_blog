const newRouter
function route(app){
    
app.get('/', (req, res) => {
    res.render('home');
  });
  
  app.get('/search', (req, res) => {
    res.render('search');
  });
  
  app.post('/search', (req, res) => {
    console.log(req.body);
    // res.send(' ');
  });
  
  app.get('/view', (req, res) => {
    res.render('view');
  });
  
 
}

module.exports = route;

