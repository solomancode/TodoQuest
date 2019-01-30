import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ITodo, TodoActionType, Status } from '../todo/ITodo';
import { TodoFilter } from '../side-bar/TodoFilter';
import { TodosDataService } from '../todos-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  private status = Status;
  private selected: string[] = [];
  private todos: ITodo[] = [];

  constructor(private todosData: TodosDataService) {
    todosData.todos.subscribe(todos => {
      this.todos = todos;
    });
  }

  ngOnInit() {
  }

  handleSelected(id, selected) {
    if (selected) {
      this.selected.push(id);
    } else {
      this.selected = this.selected.filter(tid => tid !== id);
    }
  }

  todoChange(action) {
    switch (action.type) {
      case TodoActionType.SELECTED:
        this.handleSelected(action.id, action.selected);
        break;
    }
  }

  applyToAll(status) {
    this.todos.forEach(todo => {
      if (this.selected.indexOf(todo.id) !== -1) {
        todo.status = status;
      }
    });
    this.selected = [];
  }

}
