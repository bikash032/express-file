const express=require("express")
const authRoutes=require("./auth.routes.js")
const app=express()

app.use("/auth",authRoutes)// this is main gateway for the application. As all of the routes are here must be get once 
module.exports=app