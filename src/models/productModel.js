const mongoose=require("mongoose")
const productSchema = new mongoose.Schema( {
    bookName: String,
    
  catgoriesName: String,
  price:{
    type: Number,
    required:true,
  },
})
module.exports = mongoose.model('Product', productSchema)