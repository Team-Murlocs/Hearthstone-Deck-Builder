import { Component } from "@angular/core"
import { Auth } from "../../services/auth.service"

@Component({
    selector: "logout",
    template: "<h1>You have successfully logged out</h1>"
})

export class LogoutComponent {
    constructor(private auth: Auth) {

    }
}