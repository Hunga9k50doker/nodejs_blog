const course = require('../models/course')
class SiteController{

    //[get] /
    index(req,res){
        //  res.render('home');
            course
    }

    //[get] /search
    search(req,res){
        res.send('search');
    }
}

module.exports = new SiteController;