const joi = require("joi");
const MongodbService = require("./mongodb.service");
class Userservice extends MongodbService {
  constructor() {
    super();
  }
  validateRegister = (data) => {
    try {
      let rules = joi.object({
        name: joi.string().min(3).max(30).required(),//here we need to validate our actual file name, email, phone, role for the access based control
        email: joi.string().email().required(),
        phone: joi.string().allow(null, ""),
        role: joi
          .string()
          .pattern(/customer|seller/)
          .default("costumer")
          .required(),
        image: joi.string(),
      });
      let response = rules.validate(data);  
      console.log("success:", response.value);
      if (response.error) {
        throw response.error.details[0].message;
      } else {
        return response;
      }
    } catch (expectation) {
      throw expectation;
    }
  };
  createUser = async (data) => {
    try {
      let response = this._db.collection("users").insertOne(data);// here we build up the logic for the inserting of the types as one or many or null
      return response
    } catch (error) {
      throw error;
    }
  };
}

const userSrv = new Userservice();
module.exports = userSrv;
