const express=require("express");
const app=express();
const authroutes=require("./auth.routes");

app.use("/auth",authroutes)
module.exports=app
