
const joi=require("joi")
class UserService {
  vlaidateRegister = (data) => {
    try {

        let rules=joi.object({
            name:joi.string().min(3).max(30).required(),
            email:joi.string().email().required(),
            phone:joi.string().allow(null, ""),
            role: joi.string().pattern(/Customer|seller/).default("Customer")

        });
            let response =  rules.validate(data);
            console.log(response);
           
           return response 
            
    } catch (exception) {
        console.log(exception);
        
      throw exception;
    }
  };
  
}

const userSvs = new UserService();
module.exports = userSvs;
