const course = require('../models/course')
const {mongooseToObject} = require('../../until/mongoose')

class SettingController{
    //[get] /setting
    index(req,res,next){       
        res.send('user/setting');
    }

    //[get] /setting/:slug
    setting(req,res,next){
        res.render('new detail');
    }
}

module.exports = new SettingController;
