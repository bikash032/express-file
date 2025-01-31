const multer = require("multer");
const fs = require("fs");
const helper = require("../../config/helper");

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let path = req.uploadPath;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },
  filename: (req, file, cb) => {
    let fname = Date.now() + helper.randomString(30) + "-" + file.originalname;
    cb(null, fname);
  },
});
const imgFilter = (req, file, cb) => {
try {
    let fname = file.originalname;
    let ext = fname.split(".").pop();
    let extended = ["png", "svg", "webp", "gif", "bpn", "jpeg", "jpg"];
    if (extended.includes(ext.toLowerCase())) {
      cb(null, true);
    } else {
      cb(true,false);
    }
} catch (err) {
    cb(err,null)
    
}
};

const uploader = multer({
  storage: myStorage,
  fileFilter: imgFilter,
  limits: {
    fileSize: 1000000,
  },
});
module.exports = uploader;
