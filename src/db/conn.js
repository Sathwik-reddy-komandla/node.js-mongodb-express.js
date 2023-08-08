const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Olympics',{
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})
.then(()=>{
    console.log("connected successfully")
})
.catch((e)=>{
    console.log(e)
})