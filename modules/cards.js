"use strict";
exports.__esModule = true;
var express = require("express");
var cards = express.Router();
cards.get('/', function (req, res) {
    res.status(200).json({ message: "Welcome To Cards module" });
});
exports["default"] = cards;
