const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.addUser)

module.exports = router;
