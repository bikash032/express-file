const authCheck = (req, res, next) => {
let success=true
if(success){
    next()
}else{
    next({code:401,msg:"user not logged in......"})// this is for the user to chcek about the authintication for either for the loggong or not 
}
};

module.exports = authCheck;
