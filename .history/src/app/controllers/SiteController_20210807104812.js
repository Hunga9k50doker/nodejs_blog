const course =
class SiteController{

    //[get] /
    index(req,res){
         res.render('home');
    }

    //[get] /search
    search(req,res){
        res.send('search');
    }
}

module.exports = new SiteController;