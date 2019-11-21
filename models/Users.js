const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  username: {
    type: String,
    required: [true, "Username is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  currentCity: {
    type: String
  },
  profilePhoto: String,
  admin: {
    type: Boolean,
    default: false
  },
  // posts: [
  //     {
  //         type: Schema.Types.ObjectId,
  //         ref: "Post",
  //     }
  // ],
  comment: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
