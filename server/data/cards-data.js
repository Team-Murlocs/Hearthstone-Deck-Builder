//getAllCards

module.exports = function(models) {
    let { Card } = models;
    return {
        getAllCardsFromDb() {
            return new Promise((resolve, reject) => {
                Card.find((err, cards) => {
                    if(err) {
                        return reject(err)
                    }

                    return resolve(cards);
                });
            });
        },
        getAllCards() {

        }        
    };
};