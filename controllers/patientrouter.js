const express=require("express")

const patientmodel=require("../models/patientmodel")

const router=express.Router()

router.post("/patiententry",async(req,res)=>{
    let data=req.body
    let patient=new patientmodel(data)
    let result=await patient.save()
    res.json({
        status:"success"
    })
})

module.exports=router