const mongoose =require('mongoose');

const slug = require('mongoose-slug-generator');
// mongoose.plugin(slug);


const Schema = mongoose.Schema;

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
