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
        }
    };
};