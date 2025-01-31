const authCheck=(req, res, next)=>{
    let success=true;
    if(success){
        next()
    }else{
        next({code:401, msg:"Authorization failed...."})
    }
}
module.exports=authCheck