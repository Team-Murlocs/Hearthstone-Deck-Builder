import { Component, OnInit } from "@angular/core";
import { CardService } from "../../services/card.service";
import { Card } from "../../models/card";
import { Router, Params, Route, ActivatedRoute } from "@angular/router";
import { sets } from "../../utils/sets";

@Component({
    selector: "card-info",
    templateUrl: "card-info.component.html",
    styles: [`
        .demo-card-image.mdl-card {
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
        }
    `]
})

export class CardInfoComponent implements OnInit {

    cards: Card[]

    id: string;

    type: string;

    constructor (private cardService: CardService, private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params["name"];
            this.type = sets[params["type"]];
            console.log("name");
            console.log(this.id);
            this.showCardInfo(this.id, this.type);
        });
    }

    showCardInfo(id, type) {
        this.cardService.getCardById(id, type)
            .subscribe(
                cards => {
                    this.cards = cards as Card[];
                    console.log("Card");
                    console.log(this.cards);
                },
                err => {
                    console.log("Error")
                    console.log(err);
                }
            )
    }
}