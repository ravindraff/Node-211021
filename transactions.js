"use strict";
exports.__esModule = true;
var express = require("express");
var transactions = express.Router();
transactions.get('/', function (req, res) {
    res.status(200).json({ message: "Transactions Default Get" });
});
transactions.get('/data', function (req, res) {
    res.status(200).json({ message: "Transactions URL Get" });
});
exports["default"] = transactions;
