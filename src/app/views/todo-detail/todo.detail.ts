import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemController } from '../../controllers/item.controller';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo.detail.html',
  styleUrls: ['./todo.detail.css'],
  providers: [ItemController]
})

export class TodoDetail {
    selectedItem: Item;
    ready : boolean = false;

    constructor(
      private itemController: ItemController,
      private route: ActivatedRoute 
    ) {}
    //You can do it: this.route.navigate('/clients') or this.route.navigate(['/clients',2])
    ngOnInit(): void {
        this.route.params
        .subscribe(params => {
          if ((!this.selectedItem) || (this.selectedItem.id !== params.id)){
            this.ready = false;
            this.itemController.getItem(params.id)
            .then((item) => {
              this.selectedItem = item;
              this.ready = true;
            });
          }
      });
  }
}
