class SiteController{

    //[get] /
    index(req,res){
         res.render('news');
    }

    //[get] /search
    show(req,res){
        res.send('search');
    }
}

module.exports = new SiteController;