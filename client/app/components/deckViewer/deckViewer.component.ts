import { Component } from "@angular/core"
import { Router, ActivatedRoute, Params } from "@angular/router"
import 'rxjs/add/operator/switchMap'

@Component ({
    selector: "deck",
    templateUrl: "./deckViewer.component.html"
})

export class DeckViewer {
    deckName: any

    constructor (private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.deckName = this.route.params['value'].name
    }
}