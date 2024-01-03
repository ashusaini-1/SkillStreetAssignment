const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  registerUser,
  loginUser,
  logout,
} = require("../Controller/userController");
router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logout);

module.exports = router;
