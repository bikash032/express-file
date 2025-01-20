const express = require("express");
const routers=express();

const authCtrl = require("../src/controller/auth.controller");
const authCheck = require("../src/middleware/authCheck");


routers.post("/login", authCtrl.login);
routers.post("/register", authCtrl.register);
routers.post("/active/:token", authCtrl.activeUser);
routers.post("/forget-password", authCtrl.forgetPassword);
routers.post("/logout", authCtrl.logOut);
routers.post("/reset-password", authCtrl.updatePassword);
routers.get("/me",authCheck, authCtrl.getUserLoggedIn);



module.exports = routers;
