const express = require("express")

const {home, loginUser, registerUser} = require("../controllers/userController.js")

const router = express.Router();

router.get("/", home)
router.post("/loginuser", loginUser)
router.post("/registeruser", registerUser)

module.exports = router;