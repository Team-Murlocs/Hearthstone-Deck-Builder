let path = require("path");
module.exports = function (server, controller) {
    server.all("/*", function(req, res) {
        res.sendFile(path.join(__dirname + "/../../dist/index.html"));
    });
    server.get("/cards", function(req, res) {
        // getAllCardsHere
    });

    server.post("/api/postDeck", function(req, res) {
        //post deck to user;
    });
};