const course = require('../models/course')
const {multipleMongooseToObject} = require('../../until/mongoose')

class MeController{

    //[get] /me/store.course
    storeCourses(req,res){
        course.find({})
        .then(res.send('me/stored-courses');)
        
    }
}

module.exports = new MeController;