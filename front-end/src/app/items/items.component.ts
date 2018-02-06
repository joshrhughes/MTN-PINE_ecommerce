import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

	items :Item[];

  selectedItem :number;

  onSelect(item :number): void {
      this.selectedItem = item;
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

	addToCart(id) {
		console.log(id);
	}

  getItems() {
    this.itemService.getItems()
    .subscribe((items)=> this.items = items);
  }

  constructor(private itemService :ItemService) { }

  ngOnInit() {
    this.getItems();
  }

}