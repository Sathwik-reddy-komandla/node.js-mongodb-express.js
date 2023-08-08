const express=require("express")

const app=express()
const port=process.env.port || 3000


app.get('',async(req,res)=>{
    res.send("Hello from home page")
})


app.listen(port,()=>{
    console.log(`listening at ${port}`)
})