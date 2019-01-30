import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListViewComponent } from './todo-list-view/todo-list-view.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { ElapsedPipe } from './elapsed.pipe';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoFormViewComponent } from './todo-form-view/todo-form-view.component';
import { NotFound404Component } from './not-found404/not-found404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListViewComponent,
    SideBarComponent,
    TodoListComponent,
    TodoComponent,
    ElapsedPipe,
    TodoViewComponent,
    TodoFormComponent,
    TodoFormViewComponent,
    NotFound404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
