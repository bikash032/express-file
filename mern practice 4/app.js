
const express=require("express");
const app=express();
const routes=require("./routes");
const multer = require("multer");

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(routes)
app.use((error, req, res, next)=>{
let serverCode=error.code || 500;
let msg=error.msg || "Resource is not found";
let data=error.data || error
if(error instanceof multer.MulterError){
    res.json({
        stattus:400,
        data:req.body,
        msg:error,
        meta:null

    })
}
res.status(serverCode).json({
    status:false,
    data:data,
    msg:msg,
    meta:null
})
})

app.listen(3021,"localhost",(error)=>{
    if(error){
        console.log("server listining is error");
        
    }else{
        console.log("server is listining successful",3021);
        console.log("Please press CTRL+C to disconnect");
        
        
    }
})