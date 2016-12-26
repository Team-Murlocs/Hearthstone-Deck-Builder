import { Component, OnInit } from "@angular/core";
import { CardService } from "../../services/card.service";
import { Card } from "../../models/card";

@Component({
    selector: "cards",
    templateUrl: "cards.component.html",
    styles:
        [`.demo-card-image.mdl-card {
        width: 256px;
        height: 256px;
        background: url('../assets/demos/image_card.jpg') center / cover;
        }
        .demo-card-image > .mdl-card__actions {
        height: 52px;
        padding: 16px;
        background: rgba(0, 0, 0, 0.2);
        }
        .demo-card-image__filename {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        }`]
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
                    this.cards = cards["Basic"] as Card[];
                    console.log("cards");
                    console.log(this.cards["Basic"]);
                                        
                },
                err => {
                    console.log("Ërror")
                    console.log(err);
                }
            )
    }

};