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
    profile: any

    constructor(private auth: Auth) {
        this.profile = JSON.parse(localStorage.getItem('profile'));

    }

    getAllDeckForUser(email)
}