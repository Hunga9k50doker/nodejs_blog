class NewController{

    //[get] /news
    index(req,res){
         res.render('news');
    }

    //[get] /news/:slug
    show(){
        
    }
}

module.exports = new NewController;