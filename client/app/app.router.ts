import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./services/auth.guard"
import * as Components from "./component-loader"

const appRoutes = [
    { path: "", component: Components.HomeComponent, pathMatch: "full" },
    { path: "home", component: Components.HomeComponent },
    { path: "profile", component: Components.ProfileComponent, canActivate: [AuthGuard] },    
    { path: "heroes", component: Components.HeroesComponent, canActivate: [AuthGuard] },
    { path: "heroes/cards/:class", component: Components.DeckBuilderComponent, canActivate: [AuthGuard]},    
    { path: "cards/:number", component: Components.CardsComponent },
    { path: "cards/:number/:name", component: Components.CardInfoComponent },
    { path: "decks", component: Components.DecksComponent },    
    { path: "unauthorized", component: Components.UnauthorizedComponent },
    { path: "**", component: Components.NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);