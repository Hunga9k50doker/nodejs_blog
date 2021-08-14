class NewController{

    //[get] /news
    index(req,res){
         res.render('news');
    }
}

module.exports = new NewController