const express=require("express");
const routes=express();
const authRouter=require("./auth.routes")


routes.use("/auth",authRouter)   // this is for the main gateway for all of the routes

module.exports=routes