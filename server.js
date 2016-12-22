"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongojs = require("mongojs");
// import { indexRouter } from "./server/routes/index"
// import { heroesRouter } from "./server/routes/heroes"
var db = mongojs("mongodb://pesho:pesho@ds139428.mlab.com:39428/hearthstone-deck-builder");
var port = 3000;
var app = express();
app.use(express.static(path.join(__dirname + "/dist")));
app.all("/*", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/", indexRouter)
// app.use("/heroes", heroesRouter)
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
