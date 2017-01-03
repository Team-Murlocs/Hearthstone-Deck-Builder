module.exports = function(data) {
    return {
        createDeck(req, res) {
            let {
                email
            } = req.body.email;

            let name = req.body.name;

            let cards = req.body.cards;
            return data.createDeck(email, name, cards);
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