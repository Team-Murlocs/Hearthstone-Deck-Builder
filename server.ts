import * as express from "express"
import * as bodyParser from "body-parser"
import * as path from "path"
import * as mongojs from "mongojs"
import { indexRouter } from "./server/routes/index"
import { heroesRouter } from "./server/routes/heroes"

let db = mongojs("mongodb://pesho:pesho@ds139428.mlab.com:39428/hearthstone-deck-builder")

let port = 3000

let app = express()

app.set("views", path.join(__dirname), "views")
app.set("view engine", "pug")

app.use(express.static(path.join(__dirname)))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/", indexRouter)
app.use("/heroes", heroesRouter)

app.listen(port, function() {
    console.log("Server listening on port " + port)
})