const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
<<<<<<< HEAD
  title: {
    type: String,
    required: [true, 'Post title is required'],
  },
  body: {
    type: String,
    required: [true, 'Post body is required'],
  },
  cityName: [
    {
      type: Schema.Types.ObjectId,
      ref: "City"
    }
  ],
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  comment: [String],
=======
  title: String,
  body: String,
  cityName: {
    type: Schema.Types.ObjectId,
    ref: "City"
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [String],
>>>>>>> submaster
  date: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
