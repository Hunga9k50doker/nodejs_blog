
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
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
}

module.exports = route;

