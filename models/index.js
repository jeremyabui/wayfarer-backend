const mongoose = require("mongoose");
require("dotenv").config();
// mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );
const dbUrl = process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE";
console.log(dbUrl)
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(`MongoDB connection: ${err} `));

module.exports = {
  // City: require("./City"),
  User: require("./Users"),
  Post: require("./Post"),
  Comment: require('./Comments'),
};

// Comment to update