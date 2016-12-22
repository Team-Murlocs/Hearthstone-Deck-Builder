import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeroesComponent } from "./heroes/heroes.component";
import { ProfileComponent } from "./profile/profile.component";

const appRoutes = [
    { path: "", component: HomeComponent, pathMatch: 'full'},
    { path: "home", component: HomeComponent },
    { path: "heroes", component: HeroesComponent },
    { path: "profile", component: ProfileComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);