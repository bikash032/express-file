const userSrv = require("../services/uservalidation");
class AuthController {
  login = (req, res, next) => {};
  register = (req, res, next) => {
    try {
      let data = req.body;
if(req.file){
    data.image=req.file.filename
}
      let response = userSrv.userValidation(data);
      console.log(response);


      res.json({
        data: response,
        status: 200,
        msg: "User is registered successfully",
        neta: null,
      });

    } catch (exception) {
      next({
        code: 401,
        msg: "Rregisteratin error" + exception,
        data: req.body,
      });
    }
  };
}

const authCtrl = new AuthController();
module.exports = authCtrl;
