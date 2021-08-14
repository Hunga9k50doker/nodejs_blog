class NewController{

    //[get] /news
    index(req,res){
         res.render('news');
    }

    //[get] /news/:slug
    show(){
        res
    }
}

module.exports = new NewController;