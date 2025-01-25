const { MongoClient } = require("mongodb");
const { DB } = require("../../config/db.config");

class MongodbService {
  _connection; // # indicate [private variable] _connection = private  and nothing indicates that of the public variables
  _db;   
  constructor() {
    this.connect();
  }

  connect = async () => {
    try {
      this._connection = await MongoClient.connect(DB.URL);
      this._db=this._connection.db(DB.NAME);
    } catch (error) {
      console.log("DB connection error", error);
      throw error;
    }
  };
}
module.exports = MongodbService;
