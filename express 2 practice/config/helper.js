const helpers={
    randomString:(len=100)=>{
        let chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let randomstrg="";
        let length=chars.length;
        for (let i = 0; i <= len; i++) {  // this will make the unique file name for the reqested file or the image for the backend '
            let psn=Math.floor(Math.random()*(length-1));
            randomstrg+=chars[psn]
            
        }
return randomstrg
    }
}
module.exports=helpers