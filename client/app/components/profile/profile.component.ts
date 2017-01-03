import { Component } from "@angular/core";
import { Auth } from "../../services/auth.service";
import { DeckService } from "../../services/deck.service";
import { Deck } from "../../models/deck";
import { Router, Params, Route, ActivatedRoute } from "@angular/router";

@Component({
    selector: "profile",
    templateUrl: "profile.component.html"
})

export class ProfileComponent {
    profile: any;

    decks: Deck[]


    constructor(private auth: Auth, private deckService: DeckService) {
        this.profile = JSON.parse(localStorage.getItem('profile'));
    }

    getAllDeckForUser(email) {
        this.deckService.getAllUserDecks(email)
            .subscribe(decks => {
                this.decks = decks as Deck[];
                console.log(this.decks);
            },
            err => {
                console.log("Error");
                console.log(err);
            })
    }
}