import { Component } from "@angular/core"
import { Auth } from "../../services/auth.service"

@Component({
    //moduleId: module.id,
    selector: "heroes",
    templateUrl: "heroes.component.html",
})

export class HeroesComponent {
    constructor(private auth: Auth) {

    }
}