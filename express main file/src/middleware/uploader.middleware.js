const multer = require("multer");
const helpers = require("../../config/helpers");
const fs = require("fs");


const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let path = req.uploadPath;
    if (!fs.existsSync(path)) {// this will create the path for the store of the file for our system
      fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },
  filename: (req, file, cb) => {
    console.log(file);
    let fname = helpers.randomString(30) + "-" + file.originalname;
    cb(null, fname);
  },
});

const imageFilter = (req, file, cb) => {
  try {
    let filename = file.originalname;
    let ext = filename.split(".").pop();
    const allowed = ["jpg", "jpeg", "png", "webp", "bmp", "gif", "svg"];// this is logic for the file that need to be store in the backend 
    if (allowed.includes(ext.toLowerCase())) {
      cb(null, true);
    }
  } catch (error) {
    throw error;
  }
};

const uploader = multer({
  storage: myStorage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 5000000, // file for 5mb as 5*1024*1024 round is 5*1000*1000
  },
});

module.exports = uploader;
