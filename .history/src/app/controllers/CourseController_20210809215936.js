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
        formData.img= `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const Course = new course(formData);
        Course.save()
        res.send(`Thành công`);
     }
 
        //[get] /course/:id/edit
        edit(req,res,next) {
            course.findById({})
                .then()
         }
}

module.exports = new CourseController;