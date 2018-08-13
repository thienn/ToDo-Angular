import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MainListComponent } from './todo/main-list/main-list.component';
import { ItemComponent } from './todo/main-list/item/item.component';
import { MainListService } from './todo/main-list.service';
import { ItemDetailComponent } from './todo/item-detail/item-detail.component';
import { ItemNoneComponent } from './todo/item-none/item-none.component';
import { TodoComponent } from './todo/todo.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainListComponent,
    ItemComponent,
    ItemDetailComponent,
    ItemNoneComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [MainListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
