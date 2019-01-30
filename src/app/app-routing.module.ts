import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoListViewComponent } from './todo-list-view/todo-list-view.component';
import { TodoFormViewComponent } from './todo-form-view/todo-form-view.component';
import { NotFound404Component } from './not-found404/not-found404.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: TodoListViewComponent },
  { path: 'todos/new', component: TodoFormViewComponent },
  { path: 'todos/:id', component: TodoViewComponent },
  { path: '**', component: NotFound404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
