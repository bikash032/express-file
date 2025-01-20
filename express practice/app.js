const express = require("express");
const routes = require("./routes");
const app = express();

// app.use((req, res, next) => {
//   next({code:404,msg:"resource not found"})
// });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// this is for application/json format for  receving of the data from user as in the form of the json data format.
/*
express.json() is middleware that tells our app to automatically parse JSON data in the request body.
If a client sends a request with a Content-Type in body: application/json header, the body will be parsed, and 
the resulting object will be available in req.body
 */

/**
 When a client sends a POST request with Content-Type: application/x-www-form-urlencoded,
  this middleware parses the body of the request and makes the data available in req.body.
 */
// This is used for the appliction/x-www-urlencoded alos
app.use(routes);

// middleware error handler or garbage collector
// must need to be by the end among all of the middleware as just top for the position of app.listen
app.use((error, req, res, next) => {
  // error will hold all error object or any error from anywhere
  const statusCode = error.code || 500;
  const msg = error.msg || "server error!!!!";
  const data = error.content || error;
  res.status(statusCode).json({
    data: data,
    msg: msg,
    status: false,
    meta: null,
  });
});

app.listen(3011, "localhost", (error) => {
  if (error) {
    console.log("server error");
  } else {
    console.log("server logged in.........", 3005);
    console.log("Please press CTRL+C to disconnect");
  }
});

// app.use((error,req,res,next)=>{
//   const statusCode=error.code || 500
//   const msg=error.msg || "server error!!!!"
//   const data=error.content || JSON.stringify(error)

//   res.status(statusCode).json({
//       data:data,
//       msg:msg,
//       status:true,
//       meta:null
//   })
// })
