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


//custom query helpers
courseSchema.query.sortable = function (req){
  if(req.query.hasOwnProperty('_sort')){
    const isValidType = ['asc','desc'].includes(req.query.type);
    return this.sort({ 
      [req.query.column]: isValidType ? req.query.type : 'desc',
    });
}
}
//add plugin
mongoose.plugin(slug);
courseSchema.plugin(mongooseDelete,{ deletedAt:true, overrideMethods: 'all' });

module.exports = mongoose.model('course',courseSchema);
