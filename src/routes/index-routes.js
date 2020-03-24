const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  var teste = "help";

  res.status(200).send({
    title: teste[0].charCodeAt() + 1
  });
});

module.exports = router;
