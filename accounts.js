"use strict";
exports.__esModule = true;
var express = require("express");
var account = express.Router();
account.get('/', function (req, res) {
    res.status(200).json({ message: "Accounts Deault Get" });
});
account.post('/', function (req, res) {
    res.status(200).json({ message: "Accounts Deault Post" });
});
exports["default"] = account;
