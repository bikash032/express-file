const routers = require("express").Router();
const authCtrl = require("../src/controller/auth.controller");
const authCheck = require("../src/middleware/auth_check.middleware");
const uploader = require("../src/middleware/uploader.middleware");

routers.post("/login", authCtrl.login);
const dirPath = (req, res, next) => {
  req.uploadPath = "./public/dashboard/new";
  next();
};

routers.post(
  "/register",
  dirPath,// here the app must execute for the verification of the directory where all of the data need to be stored 
  authCheck,// this will give the authintication for the entry for the further process on the regestration.
  uploader.single("image"),// this will give the image validation or of the file validation for the form that we send from frontend
  authCtrl.register// this is of the logic where we given for the final registration.
);

routers.post("/active/:token", authCtrl.activeuser);
routers.post("/forget-password", authCtrl.forgetPasssword);
routers.post("/logout", authCtrl.logout);
routers.post("/password-reset", authCtrl.passwordReset);
routers.get("/me", authCtrl.getUserLoggedIn);

routers.use(authCheck);
console.log("hello there form auth routes");

module.exports = routers;
