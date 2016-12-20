import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./../components/home/home.component"
import { ProfileComponent } from "./../components/profile/profile.component"
import { HeroesComponent } from "./../components/heroes/heroes.component"

const appRoutes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "profile",
        component: ProfileComponent
    },
    {
        path: "heroes",
        component: HeroesComponent
    }
]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)