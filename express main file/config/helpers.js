const helpers={
    randomString:(len=100)=>{
        let chars="0123456789abcedefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let randStrng="";
        let length=chars.length;
for (let index = 1; index <=len; index++) {// this will for the generation of the filename that must be unique
    let posn=Math.floor(Math.random()*(length-1));
    randStrng+=chars[posn]
    
}
return randStrng
    }
}

module.exports=helpers;