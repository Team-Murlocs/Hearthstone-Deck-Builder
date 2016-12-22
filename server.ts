//import * as express from "express"
//import * as bodyParser from "body-parser"
//import * as path from "path"
//import * as mongojs from "mongojs"
let mongojs = require("mongojs")
let bodyParser = require("body-parser")
let express = require("express")
let path = require("path")
// import { indexRouter } from "./server/routes/index"
// import { heroesRouter } from "./server/routes/heroes"

let db = mongojs("mongodb://pesho:pesho@ds139428.mlab.com:39428/hearthstone-deck-builder")

let port = 3000

let app = express()

app.use(express.static(path.join(__dirname + "/dist")))
app.all("/*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/index.html"))
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// app.use("/", indexRouter)
// app.use("/heroes", heroesRouter)

app.listen(port, function() {
    console.log("Server listening on port " + port)
})