import { Component, OnInit} from "@angular/core"
import { Auth } from "../../services/auth.service"
import { Router, Params, Route, ActivatedRoute } from "@angular/router";
import { CardService } from "../../services/card.service";
import { Card } from "../../models/card";

@Component({    
    selector: "cardsByClass",
    templateUrl: "deckBuilder.component.html",
    styles:  [`
        .mdl-grid {
            max-width: 1400px;
        }
        .mdl-card {
            max-width: 200px;
        }
        .mdl-card__media {
            background-color: #fff;
            margin: 0;
        }
        .mdl-card__title-text {
            height: 150;
        }
        .mdl-card__media > img {
            max-width: 100%;
        }
        .mdl-card__actions {
            display: flex;
            box-sizing:border-box;
            align-items: center;
        }
        .mdl-card__actions > .mdl-button--icon {
            margin-right: 3px;
            margin-left: 3px;
        }
        .mdl-card .mdl-layout-spacer {
            background-color: #fff
        }
        img {
            max-width: 170px;
        }
        `]
})

export class DeckBuilderComponent implements OnInit {

    cards: Card[]

    cardClass: string;   

    constructor(private cardService: CardService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.cardClass = params["class"];
            this.showCardByClass(this.cardClass);
        });
    }

    showCardByClass(playerClass) {
        this.cardService.getCardByClass(playerClass)
            .subscribe(
                cards => {                    
                    this.cards = cards as Card[];
                    //TODO: Neutral cards
                },
                err => {
                    console.log(err);
                }
            )
    }
}