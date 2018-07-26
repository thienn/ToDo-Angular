import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { MainListComponent } from './main-list/main-list.component';

const appRoutes: Routes = [
    { path: '', component: MainListComponent },
    { path: 'list', component: MainListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}