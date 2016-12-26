import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import * as Components from "./component-loader"

const appRoutes = [
    { path: "", component: Components.HomeComponent, pathMatch: "full" },
    { path: "home", component: Components.HomeComponent },
    { path: "heroes", component: Components.HeroesComponent },
    { path: "profile", component: Components.ProfileComponent },
    { path: "cards", component: Components.CardsComponent },
    { path: "decks", component: Components.DecksComponent },
    { path: "login", component: Components.LoginComponent },
    { path: "logout", component: Components.LogoutComponent },
    { path: "**", component: Components.NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);