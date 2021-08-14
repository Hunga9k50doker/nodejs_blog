module.exports ={
    multipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose=> mongoose.toObject)
    }
}