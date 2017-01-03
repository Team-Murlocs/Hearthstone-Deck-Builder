import { Component } from '@angular/core';
import { Auth } from './services/auth.service'
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styles: [`
        #demo-menu-lower-left { cursor: pointer; }
        .mdl-layout-title { cursor: pointer; }
        a {color: grey}
    `]
})
export class AppComponent {
    constructor(private auth: Auth) {

    }

    hideSidebar: any = function() {
        var sidebar = document.getElementsByClassName('mdl-layout__drawer')[0];
        sidebar.classList.remove('is-visible');
        sidebar.setAttribute('aria-hidden', 'true');
        var obfuscator = document.getElementsByClassName('mdl-layout__obfuscator')[0];
        obfuscator.classList.remove('is-visible');
    }
}
