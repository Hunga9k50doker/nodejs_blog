const course = require('../models/course')
class SiteController{

    //[get] /
    index(req,res,next){
        course.find({})
            .then(course=>{
                course = course.map(course=>course.toOb)
                res.render('home',{course})
            })
            .catch(next)
    }

    //[get] /search
    search(req,res){
        res.send('search');
    }
}

module.exports = new SiteController;