const db = require("../models");

// This is when we have the postDetail page
// const cityId = new URL(location.href).searchParams.get("id");

// This is hard coded so far
const cityId = "5dd6dacccba6bb5b72a016c1";
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

// User ID post

// const newPost = (req, res) => {
//   console.log(req.body);
//   if (!req.session.currentUser)
//     return res.status(401).json({ error: "Login required" });
//   db.Post.create(req.body, (err, newPost) => {
//     if (err) return console.log(err);
//     res.json({
//       status: 201,
//       message: "Created New Post",
//       requestedAt: new Date().toLocaleString(),
//       data: newPost
//     })
//   })
//     // Then find city in database
//       .then(db.City.findByIdAndUpdate(res.data.cityName, (err, foundCity) => {
//         if (err) return res.status(500);
//         // Push ID of post to city's post property
//         foundCity.posts.push(res._id);
//         // Save city
//         foundCity.save((err, updatedCity) => {
//           if (err) {
//             return res.status(400);
//           }
//           // Respond with updated city
//           res.json({
//             status: 200,
//             data: updatedCity,
//           });
//         })
//       }))
//         // Then find user by ID (current session)
//         .then(db.User.findByIdAndUpdate(req.body.author, (err, foundUser) => {
//           if (err) return res.status(500);
//           // Push ID of post to user's post property
//           foundUser.posts.push(req.body._id);
//           // Save user
//           foundUser.save((err, updatedUser) => {
//             if (err) return res.status(400);
//             res.json({
//               status: 200,
//               data: updatedUser,
//             })
//           })
//         }))
// };

const newPost = (req, res) => {
  console.log(req.body);
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
  if (req.body.author == req.session.currentUser) {
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
  } else {
    return res
      .status(401)
      .json({ error: "You are not the author of this post" });
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
