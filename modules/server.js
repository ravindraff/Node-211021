"use strict";
exports.__esModule = true;
var express = require("express");
var transactions_1 = require("./transactions");
var cards_1 = require("./cards");
var accounts_1 = require("./accounts");
var app = express();
app.use("/module1", accounts_1["default"]);
app.use("/module2", transactions_1["default"]);
app.use("/module3", cards_1["default"]);
app.listen(8091, function () {
    console.log("Server Started Successully.......");
});
