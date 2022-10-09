const { json } = require("body-parser");
const express=require("express");
// now creating app 
const app=express()
app.use(json())
app.get("/",(req,res)=>{
    res.send("SMS service is running up....")
})
app.post("/send",(req,res)=>{
    const msg=req.body.body
    res.send(msg)
})
// create server or append server 
const server=app.listen(5052,()=>{
    console.log("SMS service is running on port -5052");
});