"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
    clientID: {type: string },
    email: {type: string },
    name: {type: string }
    // Add deck
});

let User;
mongoose.model("User", UserSchema);
Card = mongoose.model("User");
module.exports = User;