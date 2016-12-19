"use strict";
var express = require("express");
var heroesRouter = express.Router();
exports.heroesRouter = heroesRouter;
heroesRouter.get('/heroes', function (req, res, next) {
    res.send('HEROES LIST');
});
