const course = require('../models/course')
class SiteController{

    //[get] /
    index(req,res){
        course.find({})
        .then(course=>res)
    }

    //[get] /search
    search(req,res){
        res.send('search');
    }
}

module.exports = new SiteController;