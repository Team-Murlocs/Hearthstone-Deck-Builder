import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AUTH_PROVIDERS } from "angular2-jwt";
import { Auth } from "./services/auth.service";


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'; //import home components
import { HeroesComponent } from "./components/heroes/heroes.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { NotFoundComponent } from "./components/404NotFound/404.component";
import { routing} from './app.router';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    imports: [BrowserModule, HttpModule, routing, FormsModule],     
    declarations: [AppComponent, HomeComponent, HeroesComponent, ProfileComponent, NotFoundComponent], // declare all derectives and components
    bootstrap: [AppComponent], // root component to bootstarp
     providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AUTH_PROVIDERS, //  appRoutingProviders,
        Auth]
})
export class AppModule { }

