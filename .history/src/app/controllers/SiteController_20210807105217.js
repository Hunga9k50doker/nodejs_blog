const course = require('../models/course')
class SiteController{

    //[get] /
    index(req,res){
        //  res.render('home');
            course.find({},function(err,courese))
    }

    //[get] /search
    search(req,res){
        res.send('search');
    }
}

module.exports = new SiteController;