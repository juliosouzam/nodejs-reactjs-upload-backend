const mongoose = require("mongoose");

class InitialDatabase {
  constructor() {
    this.init();
  }

  init() {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true
    });
  }
}

module.exports = new InitialDatabase();
