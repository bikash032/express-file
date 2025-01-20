const joi = require("joi");// this is of the module for the validation of the json format data or also can be used for the file format data too
class userService {
  userValidate = (data) => {
    try {
      let rules = joi.object({
        name: joi.string().min(3).max(30).required(),
        email: joi.string().email().required(),
        phone: joi.string().allow(),
        role: joi
          .string()
          .pattern(/customer|seller/)  // this is specially for the role based model authintication or  for the registeration
          .default("customer"),
          image:joi.string()
      });
      let response = rules.validate(data);
      console.log(response);
      
      if (response.error) {
        throw response.error.details[0].message;// this is for the frontend or to inform the user about the message what is wrong 

      } else {
        return response;
      }
  
    } catch (exception) {
      throw exception;
    }
  };
}

const userSrv = new userService();
module.exports = userSrv;
