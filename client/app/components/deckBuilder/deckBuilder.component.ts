import { Component, OnInit, Input, trigger, state, style, transition, animate } from "@angular/core"
import { Auth } from "../../services/auth.service"
import { Router, Params, Route, ActivatedRoute } from "@angular/router"
import { CardService } from "../../services/card.service"
import { Card } from "../../models/card"
import { PaginationInstance } from "ng2-pagination"
import { Deck } from "./../../models/deck"
import { DeckService } from "./../../services/deck.service"

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
        .mdl-list__item-primary-content {
            cursor: pointer;
        }        
        .mdl-button {
            float: right;
        }
        .mdl-textfield {
            float: right;
        }
    `],
    animations: [
        trigger('cardInDeck', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(100%)'}),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({transform: 'translateX(-100%)'}))
            ])
        ])
    ]
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

    profile: any    
    deckName = ""
    @Input() cardsInDeck = []
    cardsCount = 0

    addCardInDeck(cardTitle, cardId, rarity, image) {
        let search = this.cardsInDeck.filter(function (card) {
            return card.id == cardId;
        });

        let index = this.cardsInDeck.indexOf(search[0])
        if (this.cardsCount < 30) {
            if (index >= 0) {
                if (this.cardsInDeck[index].count < 2 && this.cardsInDeck[index].rarity != "Legendary") {
                    this.cardsInDeck[index].count++
                    this.cardsCount++
                }
            } else {
                let card = { title: cardTitle, img: image, rarity: rarity, id: cardId, count: 1 }
                this.cardsInDeck.push(card)
                this.cardsCount++
            }
        }
    }

    removeCardInDeck(cardId) {
        let search = this.cardsInDeck.filter(function (card) {
            return card.id == cardId;
        });

        let index = this.cardsInDeck.indexOf(search[0])
        this.cardsInDeck[index].count--
        this.cardsCount--

        if (this.cardsInDeck[index].count == 0) {
            this.cardsInDeck.splice(index, 1)
        }
    }

    cards: Card[]

    cardClass: string;

    constructor(private cardService: CardService, private deckService: DeckService, private route: ActivatedRoute, private router: Router) {
        this.profile = JSON.parse(localStorage.getItem('profile'));
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

    createDeck() {
        let deck = new Deck(this.profile.email, this.deckName, this.cardsInDeck)
        console.log(deck)
        this.deckService.postDeck(deck).subscribe(
            success => {
                this.router.navigate(['/deck', this.deckName])
            },
            error => {
                console.log(error)
            })
    }
}