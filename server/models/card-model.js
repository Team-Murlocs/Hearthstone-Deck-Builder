"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cardSchema = new Schema({
    
});

let Card;
mongoose.model("Card", CardSchema);
Card = mongoose.model("Card");
module.exports = Card;