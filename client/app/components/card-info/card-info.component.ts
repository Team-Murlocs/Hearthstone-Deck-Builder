import { Component, OnInit } from "@angular/core";
import { CardService } from "../../services/card.service";
import { Card } from "../../models/card";
import { Router, Params, Route, ActivatedRoute } from "@angular/router";

@Component({
    selector: "card-info",
    templateUrl: "card-info.component.html"
})

export class CardInfoComponent implements OnInit {

    cards: Card[]

    name: string;

    constructor (private cardService: CardService, private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.name = params["name"];
            this.cardService.getCardByName(this.name);
        });
    }  
}