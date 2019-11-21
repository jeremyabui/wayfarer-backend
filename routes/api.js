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
router.post("/posts/newPost", ctrl.posts.newPost);
router.get("/posts/:postId", ctrl.posts.postDetail);
router.put("/posts/editPost/:postId", ctrl.posts.editPost);
router.delete("/posts/deletePost/:postId", ctrl.posts.deletePost);


module.exports = router;
