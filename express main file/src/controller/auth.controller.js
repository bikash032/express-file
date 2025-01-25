const dotenv = require("dotenv");
dotenv.config();
const userSrv = require("../services/user.service");
const { MongoClient } = require("mongodb");// this is of the main for the dataconnection from the mongoDB
class Authcontroller {
  login = (req, res, next) => {};
  register = async (req, res, next) => {
    try {
      let data = req.body;
      if (req.file) {
        data.image = req.file.filename;
      }
      userSrv.validateRegister(data);
      let response = await userSrv.createUser(data);
      res.json({
        result: response,
        msg: "User registration successful....... ",
        meta: null,
      });

      // res.json({
      //   data: data,
      //   msg: "register successfully",
      //   status: 200,
      //   meta: null,
      // });

      let client = await MongoClient.connect(process.env.DB_URL);// this is of the actul setup for the data connection with the express application
      const db = client.db(process.env.DB_NAME);
      // MongoClient.connect(process.env.DB_URL).then((client)=>{
      //   let client=client.db(process.env.DB_NAME)
      // }).catch((error)=>{

      // })
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
