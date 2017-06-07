import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'todo-list',
  templateUrl: './todo.list.html',
  styleUrls: ['./todo.list.css']
})

export class TodoList {
    @Input() items: Item[];
    @Output() onDeleteItem = new EventEmitter()

    deleteItem(item : Item){
      this.onDeleteItem.next(item);
    }
}
