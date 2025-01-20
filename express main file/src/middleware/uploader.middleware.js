const multer=require("multer");
const helpers = require("../../config/helpers");
const fs=require("fs")

const myStorage=multer.diskStorage({
    destination:(req, file, cb)=>{
        let path=req.uploadPath;
        if(!fs.existsSync(path)){
            fs.mkdirSync(path, {recursive:true})
        }
        cb(null, path)
    },
    filename:(req, file, cb)=>{
        console.log(file);
      let fname=helpers.randomString(30)+"-"+file.originalname;
        cb(null, fname)
    }

    
})


const uploader=multer({
storage:myStorage
});

module.exports=uploader