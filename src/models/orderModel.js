const mongoose=require("mongoose");

const ObjectId=mongoose.type.ObjectId
const orderSchema = new mongoose.Schema( {
    name:String,
    userId:{
        type: ObjectId,
        ref:"User"
    },
    productId:{
        type:ObjectId,
        ref: "Product"
    },
    amount:Number,
    isFreeAppUse:{
        type:Boolean,
        default:false,
    },
    date:String,

}, {timestamps: true});

module.exports = mongoose.model('Order', usertSchema)
