const mongoose=require('mongoose')
const cartProductSchema=mongoose.Schema({
    id:{type:Number,required:true},
    productName:{type:String,required:true},
    productQuantity:{type:Number,required:true},
    imageLink:{type:String,required:true},
    productPrice:{type:Number}



})


module.exports=mongoose.model('Cart',cartProductSchema);