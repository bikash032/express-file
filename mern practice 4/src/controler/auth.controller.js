const authSrv=require("../services/user.services")

class autherController{
    login=(req, res, next)=>{};
    register=(req, res, next)=>{
      try {
        let data=req.body;
        if(req.file){
            data.image=req.file.filename
        }
        let response=authSrv.userValidation(data)
        res.json({
            data:response,
            code:200,
            msg:"User registration is successfull",
            meta:null
        
        }
        )
        if(response.error){
            throw response.error.details[0].message
        }
      } catch (error) {
        next({
            msg:error
        })
        
      }

    }
}
const authCtrl=new autherController();
module.exports=authCtrl;