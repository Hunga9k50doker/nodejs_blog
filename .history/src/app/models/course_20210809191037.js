const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const course = new Schema({
  name:{type:String, maxLength:255},
  description:{type:String, maxLength:600},
  id:{type:String, maxLength:255},
  id:{type:String, maxLength:255},
  id:{type:String, maxLength:255},
    timestamps:true,
  },
});

module.exports = mongoose.model('course',course);
