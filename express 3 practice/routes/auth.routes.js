
const authCtrl = require("../src/controller/auth-check.controller");
const authCheck=require("../src/middleware/auth-check.middleware");
const uploader = require("../src/middleware/uploader.middleware");
const router = require("express").Router();


router.post("/login",authCheck, authCtrl.login);

const dirpath=(req, res, next)=>{
    req.uploadPath="./public/upload/user"
    next();
}
router.post("/register", dirpath,uploader.single("image"),authCtrl.register);

module.exports = router;
