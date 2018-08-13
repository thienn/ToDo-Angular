import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { Subject } from 'rxjs';

@Injectable()
export class MainListService {

    itemsChanged = new Subject<Item[]>();

    private list: Item[] = [
        // Dummy data to test before connecting to Firebase
        new Item('Item 1', 'Description 1', 'Image'),
        new Item('Item 2', 'Description 2', 'Image'),
    ]


    getItems() {
        return this.list;
    }

    getItem(index: number) {
        return this.list[index];
    }
}