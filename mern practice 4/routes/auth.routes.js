const authCtrl = require("../src/controler/auth.controller");
const authCheck = require("../src/middleware/auth-check.middleware");
const uploader = require("../src/services/uploader");

const router=require("express").Router();


router.post("/login",authCheck,authCtrl.register);
const dirPath=(req, res, next)=>{
req.uploadPath="/public/upload/user"
next()
}
router.post("/register",dirPath,uploader.single("image"), authCtrl.register)


module.exports=router