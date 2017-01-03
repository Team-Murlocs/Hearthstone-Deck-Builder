"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Card = require("./card-model");

let cardSimpleSchema = new Schemma({
    cardId: { type: string },
    img: {type: string}
});

let deckSchema = new Schema({
    email: { type: string },
    name: { type: string },
    cards: {
        type: [cardSimpleSchema]
    }
});

let Deck;
mongoose.model("Deck", DeckSchema);
Deck = mongoose.model("Deck");
module.exports = Deck;