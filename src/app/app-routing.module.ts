import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainListComponent } from './todo/main-list/main-list.component';
import { ItemDetailComponent } from './todo/item-detail/item-detail.component';
import { ItemNoneComponent } from './todo/item-none/item-none.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todos', component: TodoComponent },
    { path: 'list', component: MainListComponent, children: [
        { path: '', component: ItemNoneComponent },
        { path: ':id', component: ItemDetailComponent }
    ] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}