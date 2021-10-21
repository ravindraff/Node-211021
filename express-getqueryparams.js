"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/sample/user/:uname/pwd/:upwd", function (req, res) {
    var uname = req.params.uname;
    var upwd = req.params.upwd;
    if (uname === "ravi" && upwd === "123") {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(500).json({ login: "fail" });
    }
});
app.get("/sample1", function (req, res) {
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    if (uname === "ravi" && upwd === "123") {
        res.status(200).json({ message: "Login Success" });
    }
    else {
        res.status(500).json({ message: "Login Failure" });
    }
});
app.listen(8080, function () {
    console.log("server started successfully......");
});
