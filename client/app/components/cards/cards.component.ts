import { Component, OnInit } from "@angular/core";
import { CardService } from "../../services/card.service";
import { Card } from "../../models/card";

@Component({
    selector: "cards",
    templateUrl: "cards.component.html"
})

export class CardsComponent implements OnInit {
    cards: Card[];
    error: any;
   
    constructor(private cardService: CardService) {
    }

     ngOnInit() {
        this.showCards();
    }

    showCards() {
        this.cardService.getAllCards()
            .subscribe(
                cards => {
                    this.cards = cards as Card[];
                    console.log("cards");
                    console.log(this.cards);
                },
                err => {
                    console.log("Ërror")
                    console.log(err);
                }
            )
    }

};