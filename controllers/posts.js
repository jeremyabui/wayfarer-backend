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
  if (!req.session.currentUser)
    return res.status(401).json({ error: "Login required" });
  db.Post.create(req.body, (err, newPost) => {
    if (err) return console.log(err);
    db.City.findById(req.body.city, (err, foundCity) => {
      if (err) return res.status(500);
      // Push ID of post to city's post propertY
      foundCity.posts.push(newPost._id);
      // Save city
      foundCity.save((err, updatedCity) => {
        if (err) return res.status(400);
        db.User.findById(req.body.author, (err, foundUser) => {
          if (err) return res.status(500);
          // Push ID of post to user's post property
          foundUser.posts.push(newPost._id);
          // Save user
          foundUser.save((err, updatedUser) => {
            if (err) return res.status(400);
            res.json({
              status: 201,
              message: "Created New Post",
              requestedAt: new Date().toLocaleString(),
              data: newPost
            })
          })
        })
      })
    })
  })
};


const postDetail = (req, res) => {
  db.Post.findById(req.params.postId)
    .populate("author")
    .exec((err, foundPost) => {
      if (err) return res.status(500).json(err);
      res.json({
        status: 200,
        data: foundPost
      });
    });
};

const editPost = (req, res) => {
  if (req.body.author == req.session.currentUser.id) {
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
  }
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
