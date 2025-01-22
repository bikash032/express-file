const express=require("express");
const router= require("./auth.routes")
const app= express();



app.use("/auth",router)

module.exports=app