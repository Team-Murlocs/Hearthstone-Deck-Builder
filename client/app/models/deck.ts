export class Deck {
    email: string;
    name: string;
    cards: any[];

    constructor(email, name, cards) {
        this.email = email
        this.name = name
        this.cards = cards
    }
}