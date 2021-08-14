class SiteController{

    //[get] /
    index(req,res){
         res.render('news');
    }

    //[get] /search
    show(req,res){
        res.send('');
    }
}

module.exports = new SiteController;