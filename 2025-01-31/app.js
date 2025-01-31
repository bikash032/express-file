const express = require("express");
const routes = require("./routes");
const { MulterError } = require("multer");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use((req, res, next) => {
next({code:401,msg:"Ressource not found"})
});

app.use((error, req, res, next) => {
  let serviceCode = error.code || 500;
  let msg = error.msg || "Internal server error"  ;
  let data = error.content || error;

  if(error instanceof MulterError){
    res.json({
      serviceCode:400,
      data:null,
      msg:error.message,              
      meta:null
    })
  }
  res.status(serviceCode).json({
    status: 400,
    msg: msg,
    data: data,
    meta: null,
  });
});

let port = 3005;
let host = "localhost";
app.listen(port, host, (error) => {
  if (error) {
    console.log(`Server is not listining ${port}`);
  } else {
    console.log(`https://${host}:${port} is listining successfully....`);
    console.log(`Please press CTRL+C to discontinue....`);
  }
});
