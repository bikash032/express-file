const userSrv = require("../services/auth.service");

class authController {
  login = (req, res, next) => {};
  register = (req, res, next) => {
    try {
      let data = req.body;
      if(req.file){
        data.image=req.file.filename;
      }
      let response = userSrv.userValidate(data);
      console.log(response);
      res.json({
          data: data,
        status: 200,
        msg: "Registration successful",
        meta: null,
      });
    } catch (exception) {
      next({
        code: 400,
        msg: "regestration failed!!!!"+exception,
        data: req.body,
      });
    }
  };
}
const authCtrl = new authController();
module.exports = authCtrl;
