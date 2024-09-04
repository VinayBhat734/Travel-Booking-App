const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlaceSchema=new mongoose.Schema({
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    title:String,
    address:String,
    photos:[String],
    description:String,
    extraInfo:String,
    checkIn:Number,
    checkOut:Number,
    maxGuests:Number,

});
const PalceModel=mongoose.model('Place',PlaceSchema);

module.exports=PalceModel;