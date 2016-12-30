import { Component, Input } from "@angular/core"
import { Auth } from "../../services/auth.service"
import { Router, Params, Route, ActivatedRoute } from "@angular/router";

@Component({
    selector: "deckHolder",
    templateUrl: "deckHolder.component.html",
    styles: [`
        h4 {
            text-align: center;
        }
    `]
})

export class DeckHolderComponent {
    @Input() cardsInDeck;
}