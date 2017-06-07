import { Injectable } from '@angular/core';
import { Net } from '../helper/net';
import { Api } from '../config/api';
import { Item } from '../models/item';

@Injectable()
export class ItemController {

  constructor(private net: Net) { }

  public getItems(): Promise<Item[]>{
    return this.net.request(Api.items,'get',null);
  }

  public getItem(id : string): Promise<Item>{
    return this.net.request(Api.items + '/' + id,'get',null);
  }

  public addItem(AItem : Item): Promise<Item>{
    return this.net.request(Api.items,'post', AItem);
  }

  public deleteItem(id : string): Promise<Item>{
    return this.net.request(Api.items + '/' + id,'delete',null);
  }

}