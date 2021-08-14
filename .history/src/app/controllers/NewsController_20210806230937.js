class NewController{

    //[get] /news
    index(req,res){
         res.render('news');
    }

    //[get] /news/:slug
    show(){
        res.send('new detia')
    }
}

module.exports = new NewController;