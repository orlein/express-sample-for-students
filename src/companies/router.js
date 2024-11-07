const express = require("express");
const router = express.Router();

router.get("/api/companies", (req, res) => {
  return res.send("Hello World!");
});
router.get("/api/companies/comparison", (req, res) => {
  return res.send("Hello World!");
});
router.get("/api/companies/:companyId", (req, res) => {
  return res.send("Hello World!");
});
router.get("/api/companies/:companyId/rank", (req, res) => {
  return res.send("Hello World!");
});

module.exports = router;
