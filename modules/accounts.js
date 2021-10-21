"use strict";
exports.__esModule = true;
var express = require("express");
var accounts = express.Router();
accounts.get("/", function (req, res) {
    res.status(200).json({ message: "Welcome to accounts module" });
});
accounts.post("/login", function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(200).json({ message: "Login successful" });
    }
    else {
        res.status(403).json({ message: "Login Failure" });
    }
});
exports["default"] = accounts;
