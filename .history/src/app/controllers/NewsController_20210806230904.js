class NewController{

    //[get] /news
    index(req,res){
         res.render('news');
    }

    //[get] /news/:shouldUseGroup
}

module.exports = new NewController;