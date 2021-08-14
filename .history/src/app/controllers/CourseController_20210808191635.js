const course = require('../models/course')
const {multipleMongooseToObject} = require('../../until/mongoose')

class CourseController{


    //[get] /search
    show(req,res){
        res.send('course detal');
    }
}

module.exports = new CourseController;