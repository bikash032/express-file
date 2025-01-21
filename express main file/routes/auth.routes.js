const routers=require("express").Router();
const authCtrl = require("../src/controller/auth.controller");
const authCheck=require("../src/middleware/auth_check.middleware");
const uploader=require("../src/middleware/uploader.middleware")


routers.post("/login",authCtrl.login)
const dirPath=(req, res, next)=>{
    req.uploadPath="./public/dashboard/new"
    next();
}

routers.post("/register",dirPath,authCheck,uploader.single("image"),authCtrl.register)

routers.post("/active/:token",authCtrl.activeuser)
routers.post("/forget-password",authCtrl.forgetPasssword)
routers.post("/logout",authCtrl.logout)
routers.post("/password-reset",authCtrl.passwordReset)
routers.get("/me",authCtrl.getUserLoggedIn)

routers.use(authCheck)
console.log("hello there form auth routes");

module.exports=routers