const multer = require("multer");
const fs = require("fs");
const helpers = require("../../config/helpers");


const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let path = req.uploadPath;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },
  filename:(req, file, cb)=>{
    let fname=helpers.randomString(30)+Date.now()+"-"+file.originalname
cb(null,fname)  
},
  
});
const imageFilter=(req, file, cb)=>{
try {
    let filename=file.originalname;
    let ext=(filename.split(".")).pop();
    console.log(ext);
    
    const allowed=["png","jpg","jpeg","webp","bmp","svg","gif"];
    if(allowed.includes(ext.toLowercase)){
        cb(null, true)
    }else{
        cb(true,false)
    }
} catch (error) {
    cb(error,null)
}
}
const uploader = multer({
  storage: myStorage,
  fileFilter:imageFilter,
  limits:{
    fileSize:5000000
  }
});

module.exports = uploader;
