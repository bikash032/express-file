const authCheck=(req, res, next)=>{
    let success=true
    if(success){
        next()
    }else{
        next({code:400, msg:"User is not logged in........"})
    }
}


module.exports=authCheck