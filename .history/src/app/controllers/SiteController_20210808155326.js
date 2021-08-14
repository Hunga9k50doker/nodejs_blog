const course = require('../models/course')
class SiteController{

    //[get] /
    index(req,res){
        
    }

    //[get] /search
    search(req,res){
        res.send('search');
    }
}

module.exports = new SiteController;