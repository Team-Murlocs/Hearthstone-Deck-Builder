let express = require("express");

let env = process.env.NODE_ENV || "development";
let app = express();
let config = require("./server/config/config")[env];

require("./server/config/express")(app, config);

app.listen(config.port);
console.log(`Server running on http://localhost:${config.port}`);