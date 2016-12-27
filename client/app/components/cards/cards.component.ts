import { Component, OnInit } from "@angular/core";
import { CardService } from "../../services/card.service";
import { Card } from "../../models/card";
import { Router, Params, Route, ActivatedRoute } from "@angular/router"

@Component({
    selector: "cards",
    templateUrl: "cards.component.html",
    styles:
        [`
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
        // .demo-card-image.mdl-card {
        // width: 256px;
        // height: 256px;
        // background: url('../assets/demos/image_card.jpg') center / cover;
        // }
        // .demo-card-image > .mdl-card__actions {
        // height: 52px;
        // padding: 16px;
        // background: rgba(0, 0, 0, 0.2);
        // }
        // .demo-card-image__filename {
        // color: #fff;
        // font-size: 14px;
        // font-weight: 500;
        // }
        `]
})

export class CardsComponent implements OnInit {
    cards: Card[];
    error: any;
    cardType: string;

    type: string = "Promo";


   
    constructor(private cardService: CardService, private route: ActivatedRoute,
  private router: Router) {
    }

     ngOnInit() {
        this.route.params.subscribe(params => {
            this.type = params["type"];
            this.showCards(this.type); 
        });         
    }

    showCards(type) {
        this.cardService.getAllCardsByType(type)
            .subscribe(
                cards => {
                    this.cards = cards[type] as Card[];
                    console.log(this.cards);                                        
                },
                err => {
                    console.log("Ërror")
                    console.log(err);
                }
            )
    }

};