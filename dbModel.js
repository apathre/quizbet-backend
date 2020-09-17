const mongoose=require('mongoose');

const quizbetSchema=mongoose.Schema({
    name:String,
    state:String,
    country:String
});


module.exports=mongoose.model('countryData',quizbetSchema);