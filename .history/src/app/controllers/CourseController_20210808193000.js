const course = require('../models/course')
const {multipleMongooseToObject} = require('../../until/mongoose')

class CourseController{


    //[get] /course/:slug
    show(req,res){

        course.findOne({slug:req.params.slug})
            .then(course=>{
                res.json(course);
            })
            .catch(next)
    }
}

module.exports = new CourseController;