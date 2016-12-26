"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cardSchema = new Schema({
    id: {type: string },
    name: {type: string },
    cardSet: {type: string },
    type: {type: string },
    rarity: {type: string },
    text: {type: string },
    playerClass: {type: string },
    locale: {type: string }
});

let Card;
mongoose.model("Card", CardSchema);
Card = mongoose.model("Card");
module.exports = Card;