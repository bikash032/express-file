const dotenv=require("dotenv")
dotenv.config()
const userSrv = require("../service/user.service");
const joi = require("joi");
const {MongoClient}=require('mongodb');

class authController {
  login = (req, res, next) => {
    let data = req.body;
    let rules = joi.object({
      email: joi.string().email().required(),
    });
  };
  register =async (req, res, next) => {
    try {
      let data = req.body;
      if (req.file) {
        data.image = req.file.filename;
      }
      //TODO:DATABASE ENTRY
     let client= await MongoClient.connect(process.env.DB_URL)

      userSrv.validateRegister(data);
      res.json({
        data: data,
        status: 200,
        msg: "Validation is successful",
        meta: null,
      });
    } catch (exception) {
      next({
        code: 400,
        msg: "Registration error" + exception,
        data: req.body,
      });
    }
  };
  activateUser = (req, res, next) => {};
  forgetPassword = (req, res, next) => {};
  logout = (req, res, next) => {};
  updatePassword = (req, res, next) => {};
  getLoggedUserIn = (req, res, next) => {
    res.json({
      data: "hello World",
      msg: "Access Granted",
      status: true,
      meta: null,
    });
  };
}

const authCtrl = new authController();
module.exports = authCtrl;
