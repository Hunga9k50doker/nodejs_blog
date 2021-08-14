const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');




mongoose.plugin(slug);


const course = new Schema({
  name:{type:String, required:true},
  description:{type:String, maxLength:600},
  img:{type:String, maxLength:255},
  videoId:{type:String, required:true},
  level:{type:String, maxLength:255},
  slug: { type: String, slug: 'name' },
},{
  timestamps:true,
});

module.exports = mongoose.model('course',course);
