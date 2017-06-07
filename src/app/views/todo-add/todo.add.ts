import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'todo-add',
  templateUrl: './todo.add.html',
  styleUrls: ['./todo.add.css']
})

export class TodoAdd {
    name: string;
    @Output() onAddItem = new EventEmitter() 

    add(){
      let newItem = new Item;
      newItem.name = this.name;
      this.onAddItem.next(newItem);
    }
}
