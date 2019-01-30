import { Component, OnInit, ViewChild } from '@angular/core';
import { Priority, ITodo } from '../todo/ITodo';
import { TodosDataService } from '../todos-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @ViewChild('todoForm') todoForm;

  private todo: ITodo;
  private priority = Priority;

  constructor(private router: Router, private todosData: TodosDataService) { }

  ngOnInit() {
    this.todo = {
      id: this.todosData.getNextId(),
      title: '',
      description: '',
      priority: Priority.Medium,
      delivery_date: new Date().toISOString()
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.todosData.saveTodo(this.todo);
    this.router.navigate(['todos', this.todo.id]);
  }
}
