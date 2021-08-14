class SiteController{

    //[get] /news
    index(req,res){
         res.render('news');
    }

    //[get] /news/:slug
    show(req,res){
        res.send('new detail');
    }
}

dule.exports = new NewController;