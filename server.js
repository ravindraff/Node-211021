"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var transactions_1 = require("./transactions");
var accounts_1 = require("./accounts");
app.use("/trans", transactions_1["default"]);
app.use("/acc", accounts_1["default"]);
app.listen(8080, function () {
    console.log("Server Started Successully....");
});
