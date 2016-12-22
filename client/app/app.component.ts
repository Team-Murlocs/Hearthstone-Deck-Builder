import { Component } from "@angular/core"
import { Auth } from "./services/auth.service"

@Component({
    moduleId: module.id,
    selector: "app",
    templateUrl: "app.component.html",
    styles: [`
        body {
        padding-top: 70px;
    }
    `]
})

export class AppComponent {
    constructor(private auth: Auth) {

    }
}