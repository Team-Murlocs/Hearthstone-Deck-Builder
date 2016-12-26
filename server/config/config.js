let path = require("path");
let rootPath = path.normalize(path.join(__dirname, "/../../"));

module.exports = {
    development: {
        rootPath,
        db: "mongodb://pesho:pesho@ds139428.mlab.com:39428/hearthstone-deck-builder",
        port: process.env.PORT || 3000
    },
    production: {
        rootPath,
        db: "mongodb://pesho:pesho@ds139428.mlab.com:39428/hearthstone-deck-builder",
        port: process.env.PORT || 3000
    }
};