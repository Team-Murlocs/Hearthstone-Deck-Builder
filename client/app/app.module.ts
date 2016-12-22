


"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AUTH_PROVIDERS } from "angular2-jwt"
import { Auth } from "./services/auth.service"


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; //import home components
import { HeroesComponent } from "./heroes/heroes.component";
import { ProfileComponent } from "./profile/profile.component";
import { routing } from './app.router';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    imports: [BrowserModule, HttpModule, routing, FormsModule],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, appRoutingProviders, AUTH_PROVIDERS,
        Auth]
<<<<<<< .mine
    imports: [BrowserModule, routing, HttpModule, FormsModule], //other modules the app depends on
    declarations: [AppComponent, HomeComponent, HeroesComponent, ProfileComponent], // declare all derectives and components
    bootstrap: [AppComponent], // root component to bootstarp
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]









=======
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
>>>>>>> .theirs
})
<<<<<<< .mine
export class AppModule {
}
=======

export class AppModule { }
>>>>>>> .theirs
