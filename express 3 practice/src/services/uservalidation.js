const joi = require("joi");

class UserServices {
  userValidation = (data) => {
    try {
      let rules = joi.object({
        name: joi.string().min(3).max(30).required(),
        email: joi.string().email(),
        phone: joi.string().allow(),
        role: joi
          .string()
          .pattern(/customer|seller/)
          .default("customer"),
          image:joi.string()
      });
      let response = rules.validate(data);
      if (response.error) {
        throw response.error.details[0].message;
      } else {
        return response;
      }
    } catch (exception) {
      throw exception;
    }
  };
}

const userSrv = new UserServices();
module.exports = userSrv;
