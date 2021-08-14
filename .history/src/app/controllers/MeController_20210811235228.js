const course = require('../models/course')
const {multipleMongooseToObject} = require('../../until/mongoose')

class MeController{

    //[get] /me/store/course
    storeCourses(req,res,next){
        Promise.all([  course.find({}),course.countDocumentsDeleted()])
            .then(([courses,deleteCount]) =>
                res.render('me/stored-courses',{
                deletedCount, //syntax distructuring
                courses: multipleMongooseToObject(courses)       
            }))
            .catch(next)
        course.countDocumentsDeleted()
            .then(deleteCount=>{
                console.log(deleteCount);
            })
            .catch(()=>{});
        course.find({})
            .then(courses =>res.render('me/stored-courses',{
                courses: multipleMongooseToObject(courses) 
             })
        )
            .catch(next);
        
    }
     //[get] /me/trash/course
     trashCourses(req,res,next){
        course.findDeleted({})
            .then(courses =>res.render('me/trash-courses',{
                courses: multipleMongooseToObject(courses) 
             })
        )
            .catch(next);
        
    }
}

module.exports = new MeController;