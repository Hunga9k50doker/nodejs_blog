const course = require('../models/course')
const {multipleMongooseToObject} = require('../../until/mongoose')

class MeController{

    //[get] /me/
    storeCourse(req,res){
        res.send('search');
    }
}

module.exports = new MeController;