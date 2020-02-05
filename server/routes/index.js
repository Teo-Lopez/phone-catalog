const express = require("express");
const router = express.Router();

const phones = require("../phones.json");
/* GET home page */
router.get("/phones", (req, res, next) => {
  setTimeout(() => {
    res.json(phones);
  }, 2000);
});

router.get("/phone/:id", (req, res, next) => {
  const phone = phones.filter(phone => phone.id == req.params.id);
  res.json(phone);
});

module.exports = router;
