const mongoose =require('mongoose');

const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;

const course = new Schema({
  name:{type:String, required:true},
  description:{type:String, maxLength:600},
  img:{type:String, maxLength:255},
  videoId:{type:String, required:true},
  level:{type:String, maxLength:255},
  slug: { type: String, slug: 'name' ,unique:true},
},{
  timestamps:true,
});


mongoose.plugin(slug);

course.plugin(mongooseDelete)

module.exports = mongoose.model('course',course);
