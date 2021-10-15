const course = require('../models/course')
const {MongooseToObject} = require('../../until/mongoose')

class SettingController{
    //[get] /news
    index(req,res){        
        res.render('news');
    }

    //[get] /news/:slug
    show(req,res){
        res.send('new detail');
    }
}
module.exports = new SettingController;
