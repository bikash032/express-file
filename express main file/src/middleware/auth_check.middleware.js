
const authCheck=((req, res, next)=>{
    
    let success=true;
    if(success){
        next()
    }else{
        next({code:401,msg:"user not logged in .........."})
    }
})
console.log("this is of authcheck middleware");

module.exports=authCheck;