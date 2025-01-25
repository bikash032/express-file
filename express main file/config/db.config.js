const dotenv=require("dotenv");
dotenv.config();

const DB={
    URL:process.env.DB_URL || "mongodb://127.0.0.1:27017",
    NAME:process.env.DB_NAME || "bikash"
}
module.exports={DB}