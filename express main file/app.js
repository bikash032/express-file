
const express=require("express");
const routes=require("./routes");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(routes)

app.use((error, req, res, next)=>{
    let statusCode=error.code || 5000;
    let msg=error.msg || "Resource not found";
    let data=error.content|| error
    res.status(statusCode).json({
        data:data,
        msg:msg,
        status:false,
        meta:null
    })
})
const port=3012;
const host="localhost";
app.listen(port,host,(error)=>{
if(error){
    console.log("server error");

}else{
    console.log("server logged in.........",3012);
    console.log("Please press CTRL+C to disconnect");
}
})