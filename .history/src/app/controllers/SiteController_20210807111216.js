const course = require('../models/course')
class SiteController{

    //[get] /
    index(req,res){
        res.json({successname: 'test',})
            // course.find({},function(err,course){
            //     if(!err){
            //      res.json(course);
            //     }else{

            //         res.status(400).json({error:'error!'});
            //     }
            // });
    }

    //[get] /search
    search(req,res){
        res.send('search');
    }
}

module.exports = new SiteController;