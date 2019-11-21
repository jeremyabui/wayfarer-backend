const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");


//Cities
router.get('/cities', ctrl.cities.index);
router.post('/cities/create', ctrl.cities.create);
router.get('/cities/:cityId', ctrl.cities.show);
router.put('/cities/update/:cityId', ctrl.cities.update);
router.delete('/cities/delete/:cityId', ctrl.cities.destroy);



router.get("/posts", ctrl.posts.allPosts);
router.post("/posts/newPost", ctrl.posts.newPost);

module.exports = router;
