let path = require("path");
module.exports = function (server, controller) {

    server.get("/api/getAllDecks", controller.getAllDecks);
    server.post("/api/addDeck", controller.createDeck);
    server.get("/api/getAllDecks/:email");

    server.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname + "/../../dist/index.html"));
    });
    server.get("/cards", function(req, res) {
        // getAllCardsHere
    });

    server.post("/api/postDeck", function(req, res) {
        //post deck to user;
    });
};