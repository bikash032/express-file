const helper={
    randomString:(len=100)=>{
        let chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let randStrg="";
        let lenght=chars.length
        for(i=1;i<=len;i++){
            let posn=Math.floor((Math.random())*lenght)
            randStrg+=chars[posn]
        }
        return randStrg
    }
}
module.exports=helper