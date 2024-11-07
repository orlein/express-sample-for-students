async function checkInvestFromMongodbMiddleware(req, res, next) {
  const maybeInvestment = await findFromMongodb(investmentId);

  if (!maybeInvestment) {
    return next({
      message: "id에 해당하는 투자가 없어요",
      code: 404,
    });
  }

  next();
}

module.exports = checkInvestFromMongodbMiddleware;
