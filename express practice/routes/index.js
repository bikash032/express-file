const express = require("express");
const authRouter = require("./auth.routes.js");
const app = express();

app.use("/auth", authRouter);

module.exports = app;
