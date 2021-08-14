const course = require('../models/course')
const {mongooseToObject} = require('../../until/mongoose')

class CourseController{


    //[get] /courses/:slug
    show(req,res,next) {

        course.findOne({slug:req.params.slug})
            .then(course=>{
                res.render('courses/show',{
                    course: mongooseToObject(course)
                })
            })
            .catch(next)
    }

    
    //[get] /courses/create
    create(req,res,next) {

       res.render('courses/create')
    }

      //[get] /courses/store
      store(req,res,next) {
        const formData =req.body;
        formData.img= `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const Course = new course(formData);
        Course.save()
              .then(() => res.redirect('/'))
              .catch(error=>{})
     }
 
    //[get] /course/:id/edit
    edit(req,res,next) {
        course.findById(req.params.id)
            .then(courses=>res.render('courses/edit',{
                course: mongooseToObject(courses)
            }))
            .catch(next)
        }

    //[post] /courses/handle-form-actions
    handleFormActions(req,res,next) {
        switch(req.body.action) {
            case 'delete'
            
            default:
        }
    }


        //[put] /courses/:id
    update(req,res,next) {
        course.updateOne({_id: req.params.id}, req.body)
            .then(()=>res.redirect('/me/stored/courses'))             
            .catch(next)
        }
        
        //[delete] /courses/:id
    delete(req,res,next) {
        course.delete({_id: req.params.id})
            .then(()=>res.redirect('back'))             
            .catch(next)
        }

         //[delete] /courses/:id
    forceDelete(req,res,next) {
        course.deleteOne({_id: req.params.id})
            .then(()=>res.redirect('back'))             
            .catch(next)
        }
        //[patch] /courses/:id/restore
    restore(req,res,next) {
        course.restore({_id: req.params.id})
            .then(()=>res.redirect('back'))             
            .catch(next)
        }
    
    
}

module.exports = new CourseController;