const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.post("/register", ctrl.auth.register);
router.post("/login", ctrl.auth.login);
router.get("/verify", ctrl.auth.verify);
router.delete("/logout", ctrl.auth.logout);
router.put("/update/:userId", ctrl.auth.updateUser);
router.get("/:userId", ctrl.auth.userDetail);
router.delete("/delete/:userId", ctrl.auth.deleteUser);

module.exports = router;
