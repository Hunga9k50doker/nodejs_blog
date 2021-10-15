const course = require('../models/course')
const {mongooseToObject} = require('../../until/mongoose')

class SettingController{
    //[get] /news
    index(req,res){        
        res.render('news');
    }

    //[get] /news/:slug
    sett(req,res){
        res.send('new detail');
    }
}
module.exports = new SettingController;
