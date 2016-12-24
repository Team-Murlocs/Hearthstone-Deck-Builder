let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

module.exports = (app, config) => {
    app.use(express.static(path.join(__dirname + "/../../dist")));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    // app.use("/", indexRouter)
    // app.use("/heroes", heroesRouter)

    const data = require("../data")({});
    const controllers = require("../controllers")(data);

    require("../routers")(app, controllers);
    require("../config/mongoose")(config);
};
