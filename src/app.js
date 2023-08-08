const express=require("express")
require('./db/conn')
const MensRanking=require('./models/mens')
const mensRouter=require('./routers/men')


const app=express()
app.use(express.json())
app.use(mensRouter)

const port=process.env.port || 3000


app.listen(port,()=>{
    console.log(`listening at ${port}`)
})