const mongoose=require('mongoose');

const countryDataSchema=mongoose.Schema({
    name:String,
    state:String,
    country:String
});


module.exports=mongoose.model('countryData',countryDataSchema);