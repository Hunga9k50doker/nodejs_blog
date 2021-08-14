const course = require('../models/course')
const {multipleMongooseToObject} = require('../../until/mongoose')

class MeController{

    //[get] /me/store.course
    storeCourses(req,res,next){
        course.find({})
            .then(courses =>{res.send('me/stored-courses',{
                courses: multipleMongooseToObject(courses) 
             })
        })
            .catch(next);
        
    }
}

module.exports = new MeController;