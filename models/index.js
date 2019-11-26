const mongoose = require("mongoose");
require("dotenv").config();
const dbUrl = process.env.MONGODB_URI || "Connected to server";

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(`MongoDB connection: ${err} `));

module.exports = {
  City: require("./city"),
  User: require("./Users"),
  Post: require("./post"),
  Comment: require('./comments'),
};
