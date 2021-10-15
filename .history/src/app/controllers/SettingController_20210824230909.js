const course = require('../models/course')
const {mongooseToObject} = require('../../until/mongoose')

class SettingController{
    //[get] /news
    index(req,res,next){        
        res.render('/user/setting');
    }

    //[get] /sett/:slug
    setting(req,res,next){
        res.render('news detail');
    }
}

module.exports = new SettingController;
