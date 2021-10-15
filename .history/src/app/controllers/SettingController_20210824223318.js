const course = require('../models/course')
const {mongooseToObject} = require('../../until/mongoose')

class SettingController{
    //[get] /news
    index(req,res){        
        res.render('setting');
    }

    //[get] /news/:slug
    setting(req,res){
        res.render('news detail');
    }
}

module.exports = new SettingController;
