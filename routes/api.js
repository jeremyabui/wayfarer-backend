const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

//CITIES
router.get("/cities", ctrl.cities.index);
router.post("/cities/create", ctrl.cities.create);
router.get("/cities/:cityId", ctrl.cities.show);
router.put("/cities/update/:cityId", ctrl.cities.update);
router.delete("/cities/delete/:cityId", ctrl.cities.destroy);

// POSTS
router.get("/posts", ctrl.posts.allPosts);
router.post("/posts/newpost", ctrl.posts.newPost);
router.get("/posts/:postId", ctrl.posts.postDetail);
router.put("/posts/:postId", ctrl.posts.editPost);
router.delete("/posts/deletePost/:postId", ctrl.posts.deletePost);

// COMMENTS
router.get("/comments", ctrl.comments.index);
router.post('/comments/create', ctrl.comments.create);
router.get('/comments/:id', ctrl.comments.show);
router.put('/comments/:id', ctrl.comments.upDate);
router.delete('/comments/:id', ctrl.comments.destroy);

module.exports = router;
