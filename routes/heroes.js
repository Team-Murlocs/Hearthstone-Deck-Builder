"use strict";
var express = require("express");
var heroesRouter = express.Router();
exports.heroesRouter = heroesRouter;
heroesRouter.get('/', function (req, res, next) {
    res.send("<heroes></heroes>");
});
