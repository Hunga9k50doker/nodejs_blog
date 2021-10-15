const course = require('../models/course')
const {mongooseToObject} = require('../../until/mongoose')

class SettingController{
    //[get] /news
    index(req,res,next){        
        res.render('user/setting');
    }

    //[get] /news/:slug
    setting(req,res){
        res.render('se detail');
    }
}

module.exports = new SettingController;
