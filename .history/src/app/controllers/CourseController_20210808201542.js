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

       res.render('courses/create')
    }

      //[get] /course/store
      create(req,res,next) {

        res.json(req.)
     }
 
}

module.exports = new CourseController;