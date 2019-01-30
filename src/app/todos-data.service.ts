import moment from 'moment';
import { Injectable } from '@angular/core';
import { TodoFilters } from './side-bar/TodoFilter';
import { ITodo, Status } from './todo/ITodo';
import { Observable, BehaviorSubject } from 'rxjs';
import todosData from './todos.json';

@Injectable({
  providedIn: 'root'
})
export class TodosDataService {

  todos: BehaviorSubject<ITodo[]> = new BehaviorSubject(todosData);

  constructor() { }

  private getDuration(date) {
    const diff = moment(moment.now()).diff(date);
    return moment.duration(diff);
  }

  private listAll() {
    this.todos.next(todosData);
  }

  private filterByWeek() {
    const todayOnly = todosData.filter(
      todo => {
        const duration = this.getDuration(todo.delivery_date);
        return duration.days() <= 7 ? todo : null;
      }
    );
    this.todos.next(todayOnly);
  }

  private filterByToday() {
    const todayOnly = todosData.filter(
      todo => {
        const duration = this.getDuration(todo.delivery_date);
        return duration.days() === 0 ? todo : null;
      }
    );
    this.todos.next(todayOnly);
  }

  private filterCompleted() {
    const completedOnly = todosData.filter(
      todo => todo.status === Status.Completed
    );
    this.todos.next(completedOnly);
  }

  private filterCancelled() {
    const cancelledOnly = todosData.filter(
      todo => todo.status === Status.Cancelled
    );
    this.todos.next(cancelledOnly);
  }

  filter(filterBy: TodoFilters) {
    switch (filterBy) {
      case TodoFilters.Today:
        return this.filterByToday();

      case TodoFilters.Week:
        return this.filterByWeek();

      case TodoFilters.Completed:
        return this.filterCompleted();

      case TodoFilters.Cancelled:
        return this.filterCancelled();

      default:
        return this.listAll();
    }
  }

  match(title: string) {
    return todosData.filter(todo => {
      const regex = new RegExp(title, 'i');
      return todo.title.match(regex);
    });
  }

  get(id: string) {
    return todosData.filter(todo => todo.id === id);
  }

  getNextId() {
    return (todosData.length + 1).toString();
  }

  saveTodo(todo: ITodo) {
    todosData.push(todo);
    this.listAll();
  }
}
