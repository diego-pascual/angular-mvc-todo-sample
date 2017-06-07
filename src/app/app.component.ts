import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { ItemController } from './controllers/item.controller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemController]
})

export class AppComponent {
  title = 'Todo sample';
  items : Item[] = [];
  ready : boolean = false;

  constructor(private itemController: ItemController){}

  ngOnInit(){
    this.loadData();
  }

  onAddItem(item : Item){
    this.itemController.addItem(item)
    .then((itemAdded)=>{
      this.items.push(itemAdded);
    })
    .catch((error)=>{
      console.log("error");
    })
  }

  onDeleteItem(item : Item){
    this.itemController.deleteItem(item.id)
    .then((itemDelete)=>{
      let index = this.items.findIndex((elem : Item, index)=>{
          if (elem.id === item.id)
          return true;
      });
      this.items.splice(index,1);
    })
    .catch((error)=>{
      console.log("error");
    })
  }

  loadData(){
    this.ready=false;
    this.itemController.getItems()
    .then((items) => {
      this.items=items;
      this.ready=true;
    })
    .catch((error)=>{
      console.log("error");
    })
  }

}
