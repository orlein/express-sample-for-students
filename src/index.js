const express = require("express");

const app = express();

const investmentsRouter = require("./investments/router");
const companyRouter = require("./companies/router");

app.get("/api/companies", (req, res) => {
  return res.send("Hello World!");
});
app.get("/api/companies/comparison", (req, res) => {
  return res.send("Hello World!");
});
app.get("/api/companies/:companyId", (req, res) => {
  return res.send("Hello World!");
});
app.get("/api/companies/:companyId/rank", (req, res) => {
  return res.send("Hello World!");
});
app.get("/api/selections", (req, res) => {
  return res.send("Hello World!");
});

app.use(investmentsRouter);
app.use(companyRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.code).send(err.message);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
