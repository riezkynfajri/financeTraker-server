const express = require("express");
const router = express.Router();
const user = require("./userRoutes");
router.get("/", (req, res) => {
  res.json("Welcome");
});
router.use("/user",user);

module.exports = router;
