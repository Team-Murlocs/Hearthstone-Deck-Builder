module.exports = function(data) {
    return {
        createDeck(req, res) {
            console.log('calling createDeck')
            console.log(req.body.email)
            let {
                email
            } = req.body.email;

            let name = req.body.name;

            let cards = req.body.cards;
            console.log(data.createDeck(email, name, cards))
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