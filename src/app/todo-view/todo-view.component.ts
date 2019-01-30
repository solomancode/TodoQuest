import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITodo } from '../todo/ITodo';
import { TodosDataService } from '../todos-data.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent implements OnInit {

  private todo: ITodo;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private todosData: TodosDataService) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      const data = this.todosData.get(params.id);
      if (data.length) {
        this.todo = data[0];
      } else {
        return this.router.navigate(['todos']);
      }
    });
  }

}
