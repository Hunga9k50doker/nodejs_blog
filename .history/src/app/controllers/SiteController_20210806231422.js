class SiteController{

    //[get] /
    index(req,res){
         res.render('news');
    }

    //[get] /search
    show(req,res){
        res.send('new detail');
    }
}

module.exports = new SiteController;