const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// Cities API Routes
router.get("/cities", ctrl.cities.index);
router.post("/cities/create", ctrl.cities.create);

router.get("/posts", ctrl.posts.allPosts);
router.post("posts/newPost", ctrl.posts.newPost);

module.exports = router;
