import { Component } from "@angular/core"
import { Auth } from "../../services/auth.service"

@Component({
    selector: "login",
    template: "<h1>Enter your credidentials</h1>"
})

export class LoginComponent {
    constructor(private auth: Auth) {

    }
}