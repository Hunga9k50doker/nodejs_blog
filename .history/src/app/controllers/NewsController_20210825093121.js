// const course = require('../models/course')
// const {multipleMongooseToObject} = require('../../until/mongoose')
class NewController{

    //[get] /news
    index(req,res){
         res.render('news');
    }

    //[get] /news/:slug
    show(req,res){
        res.send('news detail');

    }
}
module.exports = new NewController;
