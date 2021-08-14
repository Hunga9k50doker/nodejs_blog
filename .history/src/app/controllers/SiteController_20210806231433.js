class SiteController{

    //[get] /
    index(req,res){
         res.render('home');
    }

    //[get] /search
    show(req,res){
        res.send('search');
    }
}

module.exports = new SiteController;