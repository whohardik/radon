const mongoose  = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId


const bookSchema = new mongoose.Schema({
    title : { type : String,required : true,  trim: true,unique:true },              //required means mandatory keytrim: true
     excerpt : {type : String,required : true,trim : true },
    userId : { type : ObjectId,  ref : 'user', required : true},
    ISBN : {type : [String],required:true,unique:true,trim : true },
    category:{type : String,required : true},
    subcategory:{type: String,required:true},
    reviews:{type:Number,default:0,comment:"Holds number of reviews of this book"},
    deletedAt: new Date(),
    isDeleted : {type : Boolean,default : false},
  isreleasedAt: {Date,required:true,format:("YYYY-MM-DD")},

}, {timestamps : true});  //It saves the time of creating document and updating time in the document 

module.exports = mongoose.model('book',bookSchema)