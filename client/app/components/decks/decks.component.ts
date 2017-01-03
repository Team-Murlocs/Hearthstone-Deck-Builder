import { Component, OnInit } from "@angular/core";
import { DeckService } from "../../services/deck.service";
import { Deck } from "../../models/deck";

@Component({
    selector: "decks",
    templateUrl: "decks.component.html"
})

export class DecksComponent implements OnInit {

    decks: Deck[];
    constructor(private deckService: DeckService){

    }

    ngOnInit() {
        this.getAllDecks();
    }

    getAllDecks() {
        this.deckService.getAllDecks()
            .subscribe(
                decks => {
                    this.decks = decks as Deck[];
                },
                err => {
                    console.log("Error");
                    console.log(err);
                }
            )
    }
}