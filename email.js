// install express by running command in terminal >npm i express
// following line shows how to import express 
const { json } = require("express");
const express=require("express");
const { format } = require("path");
// now creating app 
const app=express()
// define for json data 
app.use(json())

app.get("/",(req,res)=>{
    res.send("Email service is running up....")
})
// for post request from postman
app.post("/send",(req,res)=>{
    const msg=req.body.subject
    res.send(msg)
})
// create server or append server 
const server=app.listen(5051,()=>{
    console.log("Email service is running on port -5051");
});
// for checking these run, both js file on different terminal with command
// > node __filename(enter)
// one or both are append in terminal then check on browser using this link "http://localhost:5051"
// now we can check our server json data 
// goto postman and edit this in post requset "http://localhost:5051/send"
// in postman select body->raw->json-> and paste the txt file data as json formatand click on send GamepadButton
// you will see 20 ok output .
// for other port send post req with other port no "http://localhost:5052/send"