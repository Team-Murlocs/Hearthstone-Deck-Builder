import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; //import home components
import { HeroesComponent } from "./heroes/heroes.component";
import { ProfileComponent } from "./profile/profile.component";
import { routing } from './app.router';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    imports: [BrowserModule, routing, HttpModule, FormsModule], //other modules the app depends on
    declarations: [AppComponent, HomeComponent, HeroesComponent, ProfileComponent], // declare all derectives and components
    bootstrap: [AppComponent], // root component to bootstarp
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule {
}