import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainListService } from '../main-list.service';
import { Item } from '../item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit, OnDestroy {
  items: Item[];

  subscription: Subscription;

  constructor(private listService: MainListService) { } 

  ngOnInit() {
    
    this.subscription = this.listService.itemsChanged.subscribe(
      (items: Item[]) => {
        this.items = items;
      } 
    )
    this.items = this.listService.getItems();
  }

  ngOnDestroy() {
   this.subscription.unsubscribe();
  }
}
