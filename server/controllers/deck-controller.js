module.exports = function(data) {
    return {
        createDeck(req, res) {
            let {
                email
            } = req.body.email;

            let cards = req.body.cards;
            return data.createDeck(email, cards);
        },
        getAllDecks(req, res) {
            return data.getAllDecks()
                .then(decks => {
                    res.json(decks);
                })
                .catch(err => {
                    res.json(err);
                });
        }
    };
};