import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import * as Components from "./component-loader"

const appRoutes = [
    { path: "", component: Components.HeroesComponent, pathMatch: "full"},
    { path: "home", component: Components.HomeComponent },
    { path: "heroes", component: Components.HeroesComponent },
    { path: "profile", component: Components.ProfileComponent },
    { path: "**", component: Components.NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);