const express=require("express");
const routes=express()
const authRoutes = require("./auth.routes");


routes.use("/auth",authRoutes)


module.exports=routes