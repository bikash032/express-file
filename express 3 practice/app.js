
const express = require("express");
const routes  = require("./routes");
const { error } = require("console");
const { MulterError } = require("multer");
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(routes)

app.use((error, req, res, next)=>{
    let serviceCode=error.code || 500;
    let msg=error.msg || "Resources not found";
    let data=error.content|| error
    if(error instanceof MulterError){
        res.json({
            status:400,
            data:null,
            msg:error.message,
            meta:null
        })
    }
    res.status(serviceCode).json({
        status:false,
        data: data,
        msg:msg,
        meta:null
    })
})

app.listen(3020, "localhost", (error) => {
  if (error) {
    console.log("This is of the server error!!!!");
  } else {
    console.log("Server listining is successfull", 3020);
    console.log("Please press CTRL + C to discontinue");
  }
});
