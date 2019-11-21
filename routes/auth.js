const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.post("/register", ctrl.auth.register);
router.post("/login", ctrl.auth.login);
router.get("/verify", ctrl.auth.verify);
router.post("/logout", ctrl.auth.logout);
router.get("/index", ctrl.auth.allUsers);
router.put("/update/:userId", ctrl.auth.updateUser);
router.get("/:userId", ctrl.auth.userDetail);

module.exports = router;
