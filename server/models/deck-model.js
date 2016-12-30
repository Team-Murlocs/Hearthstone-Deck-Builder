"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let deckSchema = new Schema({
   // Array of cards
});

let Deck;
mongoose.model("Deck", DeckSchema);
Deck = mongoose.model("Deck");
module.exports = Card;