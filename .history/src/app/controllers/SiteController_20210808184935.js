const course = require('../models/course')
const {multipleMongooseToObject} = require('../../until/mongoose')

class SiteController{

    //[get] /
    index(req,res,next){
        course.find({})
            .then(courses=>{
                courses = courses.map(course=>course.toObject())
                res.render('home',{courses})
            })
            .catch(next)
    }

    //[get] /search
    search(req,res){
        res.send('search');
    }
}

module.exports = new SiteController;