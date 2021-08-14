const course = require('../models/course')
const {mongooseToObject} = require('../../until/mongoose')

class CourseController{


    //[get] /course/:slug
    show(req,res,next) {

        course.findOne({slug:req.params.slug})
            .then(course=>{
                res.render('course/show',{
                    course: mongooseToObject,
                })
            })
            .catch(next)
    }
}

module.exports = new CourseController;