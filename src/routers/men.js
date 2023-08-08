const express=require('express')
const router=new express.Router()

const  MensRanking=require('../models/mens')

router.get('',async(req,res)=>{
    res.send("Hello from home page")
})


// Handle Post request

router.post("/mens",async (req,res)=>{
    try{
        console.log(req.body)
        const addingMensRecords=new MensRanking(req.body)
        const insertRecord=await addingMensRecords.save()
        if(!insertRecord){
            res.status(400).send("intenal error")
        }else{
            res.status(201).send(insertRecord)
        }
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})


router.get("/mens",async (req,res)=>{
    try{
        const mens=await MensRanking.find().sort({"ranking":1})
        res.status(200).send(mens)
    }catch(e){
        res.status(400).send(e)
    }
})


// get single record
router.get("/mens/:id",async (req,res)=>{
    try{
        const men=await MensRanking.findOne({_id:req.params.id})
        if(men){
            res.status(200).send(men)
        }else{
            res.status(404).send()
        }
    }catch(e){
        res.status(400).send(e)
    }
})

// get single record and update
router.patch("/mens/:id",async (req,res)=>{
    try{
        const men=await MensRanking.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        res.status(200).send(men)
    }catch(e){
        res.status(400).send(e)
    }
})

// get single record and delete
router.delete("/mens/:id",async (req,res)=>{
    try{
        const men=await MensRanking.findByIdAndDelete({_id:req.params.id})
        if(men){
            res.status(301).json({"msg":"Deleted Succesully"})
        }else{
            res.status(404).json({"msg":"User not found"})
        }
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports=router;