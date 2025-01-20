const express=require("express")
const router=express();
const authCheck=require("../src/middleware/auth-check.middleware");
const authCtrl=require("../src/controller/auth-check.controller")
const uploader=require("../src/middleware/uploader.middleware")

router.post("/login",authCtrl.login);  
const dirPath=(req, res, next)=>{
    req.uploadPath="./public/uploads/user" // this is of the spleting of the routes
    next()
}
router.post("/register",authCheck,dirPath,uploader.single("image"),authCtrl.register)
router.use(authCheck)

module.exports=router