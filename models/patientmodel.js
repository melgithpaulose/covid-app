const mongoose=require('mongoose')

const patientschema=new mongoose.Schema(
    {
        name:String,
        address:String,
        phno:String,
        symptoms:String,
        status:String
    }
)

module.exports=mongoose.model("covid",patientschema)