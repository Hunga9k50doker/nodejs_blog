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
      store(req,res,next) {
        const formData =req.body;
        formData.img= https://img.youtube.com/vi/M62l1xA5Eu8/sddefault.jpg';
        const course = new Course(formData);
        course.save()
     }
 
}

module.exports = new CourseController;