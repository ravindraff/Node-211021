"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === "admin") {
        next();
    }
    else {
        res.status(500).json({ auth: "Authentication Fail" });
    }
};
app.get("/login", [auth], function (req, res) {
    var user = req.query.user;
    var password = req.query.password;
    if (user === "admin" && password === "123") {
        res.status(200).json({ success: "Login Success" });
    }
    else {
        res.status(403).json({ success: "Login Failure" });
    }
});
app.listen(8080, function () {
    console.log("Server Statred Successully..........");
});
