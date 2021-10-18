const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.auth.controller.js");
const fileUpload= require("../middleware/fileUpload")

router.post("/register", controller.postRegister);
router.post("/login", controller.postLogin);
//router.get("/login", controller.getLogin);
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  router.put("/user/update", fileUpload.single('image'), controller.update);
module.exports = router;
