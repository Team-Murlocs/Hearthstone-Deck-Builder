const fs = require("fs"),
    path = require("path");
module.exports = function (server, controller) {
    fs.readdirSync(__dirname)
        .filter(fileName => fileName.indexOf("-router") !== -1)
        .forEach((routerName) => {
            const router = require(path.join(__dirname, `/${routerName}`));
            router(server, controller);
        });
};