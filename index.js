import "dotenv/config";
import express from "express"

const app=express();
app.get("/",(req,res)=>{
    res.send('<h1>prashanth</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log("posrt is running")
})

