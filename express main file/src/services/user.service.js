const joi = require("joi");
class Userservice {
  validateRegister = (data) => {
    try {
      let rules = joi.object({
        name: joi.string().min(3).max(30).required(),
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
}

const userSrv = new Userservice();
module.exports = userSrv;
