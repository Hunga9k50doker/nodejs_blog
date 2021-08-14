const course = require('../models/course')
const {multipleMongooseToObject} = require('../../until/mongoose')

class CourseController{


    //[get] /course/:slug
    show(req,res){
        res.send('course detail');
    }
}

module.exports = new CourseController;