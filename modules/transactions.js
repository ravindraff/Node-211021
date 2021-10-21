"use strict";
exports.__esModule = true;
var express = require("express");
var tranactions = express.Router();
var auth1 = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "abc") {
        next();
    }
    else {
        res.status(500).json({ auth: "Token Authentication Failure" });
    }
};
var auth2 = function (req, res, next) {
    var allHeaders = req.headers;
    var wish = allHeaders.wish;
    if (wish === "hello") {
        next();
    }
    else {
        res.status(500).json({ auth: "Wish Authentication Failure" });
    }
};
tranactions.get("/", [auth1, auth2], function (req, res) {
    res.status(200).json({ message: "Welcome to Transactions module" });
});
exports["default"] = tranactions;
