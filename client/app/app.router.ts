import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./services/auth.guard"
import * as Components from "./component-loader"

const appRoutes = [
    { path: "", component: Components.HomeComponent, pathMatch: "full" },
    { path: "home", component: Components.HomeComponent },
    { path: "heroes", component: Components.HeroesComponent },
    { path: "profile", component: Components.ProfileComponent, canActivate: [AuthGuard] },
    { path: "cards/:type", component: Components.CardsComponent },
    { path: "cards/name/:name", component: Components.CardInfoComponent },
    { path: "decks", component: Components.DecksComponent },
    { path: "**", component: Components.NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);