const course = require('../models/course')
const {multipleMongooseToObject} = require('../../until/mongoose')

class SiteController{

    //[get] /
    index(req,res,next){
        course.find({})
            .then(courses=>{
                res.render('home',{
                courses: multipleMongooseToObject(courses);
                })
        
            .catch(next)
    }

    //[get] /search
    search(req,res){
        res.send('search');
    }
}

module.exports = new SiteController;