const path = require("path");

module.exports = function(server, controller) {
    server.get("/api/decks", controller.getAllDecks),
    server.post("api/addDeck", controller.createDeck),
    server.get("/api/getDeckForUser/:email")
};