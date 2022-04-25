const express = require("express");

const router = express.Router();
const registerUser = require("./userController");

//making Api so user can register and we can store its data
//here we are routing to the path with the post method to the function
router.route("/register")
    .post(registerUser);

router.route("/login")
    .get(registerUser);

module.exports = router;