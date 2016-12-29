import { Component, OnInit } from "@angular/core";
import { CardService } from "../../services/card.service";
import { Card } from "../../models/card";
import { Router, Params, Route, ActivatedRoute } from "@angular/router";
import { sets } from "../../utils/sets";

@Component({
    selector: "card-info",
    templateUrl: "card-info.component.html"
})

export class CardInfoComponent implements OnInit {

    cards: Card[]

    name: string;

    type: string;

    constructor (private cardService: CardService, private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.name = params["name"];
            this.type = sets[params["type"]];
            console.log("name");
            console.log(this.name);
            this.showCardInfo(this.name, this.type);
        });
    } 

    showCardInfo(name, type) {
        this.cardService.getCardByName(name, type)
            .subscribe(                 
                cards => {
                    this.cards = cards[type] as Card[];
                    console.log("Card");
                    console.log(this.cards);                                        
                },
                err => {
                    console.log("Ërror")
                    console.log(err);
                }            
            )
    } 
}