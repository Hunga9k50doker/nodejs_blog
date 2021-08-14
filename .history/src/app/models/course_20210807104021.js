const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const course = new Schema({
  name:{type:String, maxLength:255},
  description:{type:string, maxLength:255},
  id:{type:string, maxLength:255},
  create:{type:String, maxLength:255},

});