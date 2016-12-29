import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AUTH_PROVIDERS } from "angular2-jwt";
import { Auth } from "./services/auth.service";
import { AuthGuard } from "./services/auth.guard"
import * as Components from "./component-loader";
import { routing} from "./app.router";
import { APP_BASE_HREF } from "@angular/common";
import { Requester } from "./services/requester.service";
import { CardService } from "./services/card.service";


@NgModule({
    imports: [BrowserModule, HttpModule, routing, FormsModule],
    declarations: [
        Components.AppComponent,
        Components.HomeComponent,
        Components.HeroesComponent,
        Components.ProfileComponent,
        Components.NotFoundComponent,
        Components.CardsComponent,
        Components.DecksComponent,
        Components.CardInfoComponent
        ], // declare all derectives and components
    bootstrap: [Components.AppComponent], // root component to bootstarp
     providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AUTH_PROVIDERS, //  appRoutingProviders,
        Auth, AuthGuard, Requester, CardService]
})
export class AppModule { }

