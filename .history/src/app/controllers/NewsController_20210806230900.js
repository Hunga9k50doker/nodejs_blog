class NewController{

    //[get] /news
    index(req,res){
         res.render('news');
    }

    //[get] /news/
}

module.exports = new NewController;