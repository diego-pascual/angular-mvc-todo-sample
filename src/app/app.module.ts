import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }  from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TodoDetail } from './views/todo-detail/todo.detail';
import { TodoList } from './views/todo-list/todo.list';
import { TodoAdd } from './views/todo-add/todo.add';

import { Net } from './helper/net';

import { AppRoutingModule } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    TodoDetail,
    TodoList,
    TodoAdd
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdProgressSpinnerModule
  ],
  providers: [Net],
  bootstrap: [AppComponent]
})
export class AppModule { }
