import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service'
@Component({
    selector: 'app-home',
    template: `<h1>Welcome</h1>`   
})
export class HomeComponent {
    constructor(private auth: Auth) {

    }
}