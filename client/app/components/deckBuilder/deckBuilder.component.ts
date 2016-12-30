import { Component, OnInit, Input } from "@angular/core"
import { Auth } from "../../services/auth.service"
import { Router, Params, Route, ActivatedRoute } from "@angular/router";
import { CardService } from "../../services/card.service";
import { Card } from "../../models/card";
import { PaginationInstance } from "ng2-pagination";

@Component({
    selector: "cardsByClass",
    templateUrl: "deckBuilder.component.html",
    styles: [`
        h4 {
            text-align: center;
        }
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
            max-width: 155px;
        }
        .mdl-cell img {
            cursor: pointer;
        }
        .mdl-list__item {
            cursor: pointer;
        }
    `]
})

export class DeckBuilderComponent implements OnInit {

    // Pagination
    public filter: string = "";
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: PaginationInstance = {

        id: "advanced",

        itemsPerPage: 20,

        currentPage: 1
    };
    //

    @Input() cardsInDeck = [
    ]

    addCardInDeck(cardTitle, cardId) {
        var card = { title: cardTitle, id: cardId }
        this.cardsInDeck.push(card)
    }

    removeCardInDeck(cardId) {
        var search = this.cardsInDeck.filter(function (card) {
            return card.id == cardId;
        });
        let index = this.cardsInDeck.indexOf(search[0])
        this.cardsInDeck.splice(index, 1)
    }

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

    onPageChange(pageNumber: number) {
        console.log("change to page", pageNumber);
        this.config.currentPage = pageNumber;
    }

    showCardByClass(playerClass) {
        this.cardService.getCardByClass(playerClass)
            .subscribe(
            cards => {
                this.cards = cards as Card[];
                this.cardService.getCardByClass("Neutral")
                    .subscribe(
                    neutralCards => {
                        this.cards = this.cards.concat(neutralCards)
                    }
                    )
            },
            err => {
                console.log(err);
            }
            )
    }
}