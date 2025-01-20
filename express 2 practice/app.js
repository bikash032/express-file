
const express=require("express");
const app=express();
const routes=require("./routes");



app.use(express.json());
app.use(express.urlencoded({extended:true})) // this is for the request handeling for  the frontend data or can be taken now from the postman

app.use(routes);

app.use((error, req, res, next)=>{
    let serverCode=error.code || 500;
    let msg=error.msg || "Resources not found"; // this is for the error handeling 
    let data = error.content || error

    res.status(serverCode).json({
        status:false,
        msg:msg,
        data:data,
        meta:null
    })
})


app.listen(3018,"localhost",(error)=>{
    if(error){
        console.log("server listining error",error); // this is for the server listinging
        
    }else{
        console.log("Server listining is successfull",3018);
        console.log("Please press CTRL+C  to discontinue");
    }
})