const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const course = new Schema({
  name:{type:String, maxLength:255},
  description:{type:String, maxLength:600},
  id:{type:String, maxLength:255},
  id:{type:String, maxLength:255},
  id:{type:String, maxLength:255},
  {createAt:{type:Date, default:Date.now},
  updateAt:{type:Date, default:Date.now},
}
});

module.exports = mongoose.model('course',course);
