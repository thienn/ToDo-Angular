import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { MainListService } from '../main-list.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  id: number;

  constructor(private listService: MainListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.item = this.listService.getItem(this.id);
      }
    )
  }

}
