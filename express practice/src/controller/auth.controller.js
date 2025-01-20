const userSvs = require("../services/user.services");
const Joi=require("joi");
class AuthController {
login=(res, req, next)=>{}
  register = (req, res, next) => {
    try {

      let data = req.body;
      let response = userSvs.vlaidateRegister(data);
 
      res.json({
        data: response,
        msg:"Register successfully",
        status:200,
        meta: null
      })
      
      
      
    } catch (error) {
      next({
        code: 400,
        msg: "Registration error " + error,
       
      });
    }
  };
  activeUser = (req, res, next) => {};
  forgetPassword = (req, res, next) => {};
  logOut = (req, res, next) => {};
  updatePassword = (req, res, next) => {};
  getUserLoggedIn = (req, res, next) => {
    res.json({
      data: "helo1111",
      msg: "access granted",
      status: true,
      meta: null,
    });
  };
}
console.log("hrllo form auth controller");

const authCtrl = new AuthController();
module.exports = authCtrl;
