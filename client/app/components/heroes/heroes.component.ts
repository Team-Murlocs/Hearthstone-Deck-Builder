import { Component } from "@angular/core"

@Component({
    moduleId: module.id,
    selector: "heroes",
    templateUrl: "heroes.component.html",
    styles: [`
        img {
            width: 600px;
        }
    `]
})
export class HeroesComponent { }