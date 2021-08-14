const course = require('../models/course')
const {mongooseToObject} = require('../../until/mongoose')

class CourseController{


    //[get] /course/:slug
    show(req,res,next) {

        course.findOne({slug:req.params.slug})
            .then(course=>{
                res.render('courses/show',{
                    course: mongooseToObject(course)
                })
            })
            .catch(next)
    }

    
    //[get] /course/create
    create(req,res,next) {

       
    }
}

module.exports = new CourseController;