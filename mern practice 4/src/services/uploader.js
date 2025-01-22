const helper = require("../../config/helper");
const multer = require("multer");
const fs = require("fs");

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let path = req.uploadPath;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },
  filename: (req, file, cb) => {
    
    let fname = helper.randomString(30) + "-" + file.originalname;
    cb(null, fname);
  },
  
  
});

const imageFilter = (req, file, cb) => {
  try {
    let filename = file.originalname;
   
    
    let ext = filename.split(".").pop();
    console.log(ext);

    let extended = ["jpg", "png", "webp", "gif", "svg", "bmp"];
    if (extended.includes(ext.toLowerCase())) {
     cb(null, true)
    }
  } catch (error) {
   console.log(error);

   
  }
};

const uploader = multer({
  storage: myStorage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 5000000,
  },
});
module.exports = uploader;
