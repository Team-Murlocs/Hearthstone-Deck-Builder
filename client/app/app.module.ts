import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpModule } from "@angular/http"
import { routing, appRoutingProviders } from "./routing/app.routing"
import { AUTH_PROVIDERS } from "angular2-jwt"
import { Auth } from "./services/auth.service"

import { AppComponent } from "./app.component"
import { HomeComponent } from "./components/home/home.component"
import { ProfileComponent } from "./components/profile/profile.component"
import { HeroesComponent } from "./components/heroes/heroes.component"

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        HeroesComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        appRoutingProviders,
        AUTH_PROVIDERS,
        Auth
    ]
})

export class AppModule { }