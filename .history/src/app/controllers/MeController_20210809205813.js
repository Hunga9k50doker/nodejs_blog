const course = require('../models/course')
const {multipleMongooseToObject} = require('../../until/mongoose')

class MeController{

    //[get] /me/store.course
    storeCourses(req,res){
        res.send('me/s');
    }
}

module.exports = new MeController;