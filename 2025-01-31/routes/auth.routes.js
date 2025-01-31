const authRoutes = require("express").Router();
const authCtrl = require("../src/controller/auth.controller");
const authCheck = require("../src/middleware/auth.check.middlerware");
const uploader = require("../src/middleware/uploader.middleware");




authRoutes.post("/login", authCtrl.login);
let dirPath=((req, res, next)=>{
    req.uploadPath=("./public/upload/user")
   next()
})
authRoutes.post("/register",dirPath,uploader.single("image"), authCtrl.register);
authRoutes.post("/active/:token", authCtrl.activateUser);
authRoutes.post("/forget-password", authCtrl.forgetPassword);
authRoutes.post("/logout", authCtrl.logout);
authRoutes.post("/password-reset", authCtrl.updatePassword);
authRoutes.get("/me", authCheck, authCtrl.getLoggedUserIn);



module.exports = authRoutes;
