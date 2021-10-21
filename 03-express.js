"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.status(200).json({ message: "Welcome to Typescript" });
});
app.listen(8080);
console.log("Listening on port 8080");
