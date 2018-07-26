import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainListService } from './main-list.service';
import { Item } from './item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit, OnDestroy {
  items: Item[];

  subscription: Subscription;

  private list: Item[] = [
    // Dummy data to test before connecting to Firebase
    new Item('Item 1', 'Description 1', 'Image'),
    new Item('Item 2', 'Description 2', 'Image'),
]
  
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
