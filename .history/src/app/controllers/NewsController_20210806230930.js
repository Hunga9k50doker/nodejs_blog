class NewController{

    //[get] /news
    index(req,res){
         res.render('news');
    }

    //[get] /news/:slug
    show(){
        res.send('new da')
    }
}

module.exports = new NewController;