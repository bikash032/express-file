const joi = require("joi");
class userServices {
  validateRegister = (data) => {
    try {
      let rules = joi.object({
        // this will only validate for the data not for the database validation
        name: joi.string().min(3).max(30).required(),
        email: joi.string().email().required(),
        phone: joi.string().allow(null,""),
        role: joi
          .string()
          .pattern(/seller|customer/)
          .default("customer").required(),
          image:joi.string()
      });
      let response=rules.validate(data)
 
      if(response.error){
        throw response.error.details[0].message
      }else{
        return response
      }

    } catch (exception) {
      throw exception; // this will throw the exception for the space where we called this function
      // in the portion of the try block of the called function
    }
  };
}
const userSrv = new userServices();
module.exports = userSrv;
