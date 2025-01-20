const multer=require("multer");  // thsi is for the file uploading 
const helpers=require("../../config/helper")
const fs=require("fs")


const myStorage=multer.diskStorage({// this is for the creating of the file location and its path creating 
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
})

module.exports=uploader