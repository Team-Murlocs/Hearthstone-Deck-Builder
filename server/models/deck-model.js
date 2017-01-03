"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cardSimpleSchema = new Schema({
    cardId: { type: String },
    img: {type: String}
});

let deckSchema = new Schema({
    email: { type: String },
    name: { type: String },
    cards: {
        type: [cardSimpleSchema]
    }
});

let Deck;
mongoose.model("Deck", deckSchema);
Deck = mongoose.model("Deck");
module.exports = Deck;