const course = require('../models/course')
const {multipleMongooseToObject} = require('../../until/mongoose')

class MeController{

    //[get] /me/store.course
    storeCourses(req,res){
        course.find({})
        .then()
        
    }
}

module.exports = new MeController;