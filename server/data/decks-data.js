"use strict";
module.exports = function(models) {
    let { Deck } = models;
    return {
        createDeck(email, name, cards = []) {
            let newDeck = new Deck ({
                email,
                name,
                cards
            });

            return new Promise((resolve, reject) => {
                console.log("calling data")
                console.log(newDeck)
                newDeck.save((err) => {
                    if (err) {
                        return reject(error);
                    }

                    return resolve(newDeck);
                });
            });
        },
        getAllDecks() {
            return new Promise((resolve, reject) => {
                Deck.find({})
                    .exec((err, deck) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(deck);
                    });
            });
        },
        getDeckByEmail(email) {
            return new Promise((resolve, reject) => {
                Deck.find({ email })
                    .exec((err, deck) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(deck);
                    });
            });
        }
    };
};