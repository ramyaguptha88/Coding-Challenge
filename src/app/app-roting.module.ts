
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileDetailsComponent } from './components/profileDetail/profileDetails.component';

const appRoutes: Routes = [
    { 
        path: '',
        redirectTo: '/profile',
        pathMatch: 'full' 
    },
    {
        path: 'profile',
        component: ProfileComponent,
        children: [{ path: 'Details', component: ProfileDetailsComponent }]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}