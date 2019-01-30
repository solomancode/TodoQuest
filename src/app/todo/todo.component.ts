import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo, Status, Priority, ITodoAction, TodoActionType } from './ITodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() selected: Boolean;
  @Input() todo: ITodo;
  @Output() todoChange: EventEmitter<ITodoAction> = new EventEmitter();

  private status = Status;
  private priority = Priority;

  public actAlert: String;

  constructor() { }

  ngOnInit() {
  }

  toggleSelected(isSelected) {
    this.selected = !this.selected;
    this.todoChange.emit({
      type: TodoActionType.SELECTED,
      id: this.todo.id,
      selected: this.selected
    });
  }

  setCompleted() {
    this.todo.status = Status.Completed;
    this.todoChange.emit({
      type: TodoActionType.STATUS_CHANGE,
      id: this.todo.id,
      status: Status.Completed
    });
  }

  setCancelled() {
    this.todo.status = Status.Cancelled;
    this.todoChange.emit({
      id: this.todo.id,
      type: TodoActionType.STATUS_CHANGE,
      status: Status.Cancelled
    });
  }
}
