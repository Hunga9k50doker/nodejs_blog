class NewController{

    //[get] /news
    index(req,res){
         res.render('news');
    }

    //[get] /news/:slug
    show(){
        res.send('new detiall')
    }
}

module.exports = new NewController;