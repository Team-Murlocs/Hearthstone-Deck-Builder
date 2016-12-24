import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { NotFoundComponent } from  "./components/404NotFound/404.component"

const appRoutes = [
    { path: "", component: HomeComponent, pathMatch: 'full'},
    { path: "home", component: HomeComponent },
    { path: "heroes", component: HeroesComponent },
    { path: "profile", component: ProfileComponent },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);