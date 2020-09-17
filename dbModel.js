const mongoose=require('mongoose');

const countryDataSchema=new mongoose.Schema({
    name:String,
    state:String,
    country:String
},
{
    collection:"countryData"
});


module.exports=mongoose.model('countryData',countryDataSchema);