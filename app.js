const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const patientrouter=require("./controllers/patientrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://melgith2002:melgith2002@cluster0.vqeinn7.mongodb.net/patiententryDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/covid",patientrouter)

app.listen(2004,()=>{
    console.log("localhost running")
})