"use strict";
var express = require("express");
var indexRouter = express.Router();
exports.indexRouter = indexRouter;
indexRouter.get('/', function (req, res, next) {
    res.render('./server/views/index.pug');
});
