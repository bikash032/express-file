const helpers={
    randomString:(len=100)=>{
        let chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let randomStrng="";
        let length=chars.length
       for (let index = 1; index <= len; index++) {
        let posn=Math.floor(Math.random()*(length-1))
        randomStrng+=chars[posn]
        
       }
return randomStrng
    }
}
module.exports=helpers