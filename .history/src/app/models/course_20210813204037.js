const mongoose =require('mongoose');

const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name:{type:String, required:true},
  description:{type:String, maxLength:600},
  img:{type:String, maxLength:255},
  videoId:{type:String, required:true},
  level:{type:String, maxLength:255},
  slug: { type: String, slug: 'name' ,unique:true},
},{
  timestamps:true,
});

//add plugin
mongoose.plugin(slug);
courseSchema = .plugin(mongooseDelete,{ deletedAt:true, overrideMethods: 'all' });

module.exports = mongoose.model('course',course);
