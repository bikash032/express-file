const userSrv = require("../services/user.service");
class Authcontroller {
  login = (req, res, next) => {

  };
  register = (req, res, next) => {
    try {
      let data = req.body;
  if(req.file){
    data.image=req.file.filename;
  }
      
      
      let response = userSrv.validateRegister(data);
      console.log(response);
      
      res.json({
        data: data,
        msg: "register successfully",
        status: 200,
        meta: null,
      });
    } catch (exception) {
      next({
        code: 400,
        msg: "Regestration error!!" + exception,
        data: req.body,
      });
    }
  };
  activeuser = (req, res, next) => {};
  forgetPasssword = (req, res, next) => {};
  logout = (req, res, next) => {};
  passwordReset = (req, res, next) => {};
  getUserLoggedIn = (req, res, next) => {};
}

const authCtrl = new Authcontroller();
module.exports = authCtrl;
