const express = require("express");
const router = express.Router();
const checkInvestFromMongodbMiddleware = require("./checkInvestFromMongodbMiddleware");

router.get(
  "/api/investments",
  (req, res, next) => {
    next({ message: "커스텀 에러메시지", code: 409 });
  },
  (req, res) => {
    return res.send("Investment Router Get!");
  }
);
router.post("/api/investments", (req, res) => {
  return res.send("Hello World!");
});
router.put(
  "/api/investments/:investmentId",
  async (req, res, next) => {
    const investmentId = req.params.investmentId;
    if (!investmentId) {
      return next({
        message: "올바른 id를 입력해 주세요",
        code: 404,
      });
    }

    // 정상
    next();
  },
  checkInvestFromMongodbMiddleware,
  (req, res) => {
    return res.send("Hello World!");
  }
);
router.delete("/api/investments/:investmentId", (req, res) => {
  return res.send("Hello World!");
});

module.exports = router;
