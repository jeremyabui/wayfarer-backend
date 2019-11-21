const db = require("../models");

// Index

const allPosts = (req, res) => {
  db.Post.find({}, (err, posts) => {
    if (err) return console.log(err);
    res.json({
      status: 200,
      message: "All posts",
      requestedAt: new Date().toLocaleString(),
      count: posts.length,
      data: posts
    });
  });
};

const newPost = (req, res) => {
  db.Post.create(req.body, (err, newPost) => {
    if (err) return console.log(err);
    res.json({
      status: 201,
      message: "Created New Post",
      requestedAt: new Date().toLocaleString(),
      data: newPost
    });
  });
};

module.exports = {
  allPosts,
  newPost
};
