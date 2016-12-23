import { Component } from "@angular/core"
import { Auth } from "../../services/auth.service"

@Component({    
    selector: "heroes",
    templateUrl: "heroes.component.html",
    styles: [`
        .mdl-grid {
            max-width: 600px;
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
    `]
})

export class HeroesComponent {
    constructor(private auth: Auth) {

    }
}