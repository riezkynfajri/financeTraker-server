const User = require("../models/User");

const express = require("express"),
  authenticator = require("../middlewares/authenticator"),
  router = express.Router(),
  user = require("./userRoutes"),
  data = require("./dataRoutes");

router.get("/", (req, res) => { res.json('Welcome'); });

router.use("/user", user);
router.use(authenticator);
router.use("/data", data);

module.exports = router;
