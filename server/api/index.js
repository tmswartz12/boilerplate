const express = require("express");

const router = express.Router();

const User = require("./user-route");

router.use("/user", User);

router.use(function(req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
