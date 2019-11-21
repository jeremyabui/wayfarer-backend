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

const postDetail = (req, res) => {
  db.Post.findById(req.params.postId, (err, foundPost) => {
    if (err) return res.status(500).json(err);
    res.json({
      status: 200,
      data: foundPost
    });
  });
};

const editPost = (req, res) => {
  db.Post.findByIdAndUpdate(
    req.params.postId,
    req.body,
    { new: true },
    (err, editedPost) => {
      if (err) return console.log(err);
      res.json({
        status: 200,
        count: 1,
        data: editedPost,
        requestedAt: new Date().toLocaleString()
      });
    }
  );
};

const deletePost = (req, res) => {
  db.Post.findByIdAndDelete(req.params.postId, (err, deletedPost) => {
    if (err) return sendErr(res);
    res.json({
      status: 200,
      data: deletedPost,
      requestedAt: new Date().toLocaleString()
    });
  });
};

module.exports = {
  allPosts,
  newPost,
  postDetail,
  editPost,
  deletePost
};
