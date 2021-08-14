const course = require('../models/course')
const {multipleMongooseToObject} = require('../../until/mongoose')

class CourseController{


    //[get] /search
    search(req,res){
        res.send('search');
    }
}

module.exports = new CourseController;