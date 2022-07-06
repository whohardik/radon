const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const reviewSchema = new mongoose.Schema({
    bookId : { type : ObjectId,  ref : 'book', required : true},
    reviewedBy : { type : String, required : true,default : Guest, value: reviewerName},
    reviewedAt : { Date, required:true,},
    rating : {type : number,required : true},
    review : { type : String,trim : true},
    subcategory : {type : [String],trim : true},
    isDeleted : {type : Boolean,default : false},

}, {timestamps : true})  //It saves the time of creating document and updating time in the document 

module.exports = mongoose.model('review',reviewSchema)
