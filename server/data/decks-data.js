"use strict";
module.exports = function(models) {
    let { Deck } = models;
    return {
        createDeck(email, cards = []) {
            let newDeck = new Deck ({
                email,
                cards
            });

            return new Promise((reoslve, reject) => {
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
        getDeckByUsername(email) {
            return new Promise((resolve, reject) => {
                Deck.find({ email })
                    .exec((err, deck) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(deck);
                    });
            });
        }, 

        removeDeck()
    };
};