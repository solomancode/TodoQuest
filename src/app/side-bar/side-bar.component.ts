import { Component, OnInit } from '@angular/core';
import { TodoFilter, TodoFilters, ITodoFilter } from './TodoFilter';
import { Router, ActivatedRoute } from '@angular/router';
import { TodosDataService } from '../todos-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  static DEFAULT_FILTER = TodoFilters.All;
  static BUILTIN_FILTERS = ['All', 'Today', 'Week', 'Completed', 'Cancelled'];
  private filters: ITodoFilter[] = [];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private todosData: TodosDataService
  ) {

    const filter = activeRoute.snapshot.queryParamMap.get('filter');
    if (!filter) {
      this.router.navigate([], {
        queryParams: { filter: SideBarComponent.DEFAULT_FILTER },
        queryParamsHandling: 'merge'
      });
    }
  }

  handleQueryParams = (params) => {
    this.todosData.filter(params.filter);
  }

  ngOnInit() {
    this.filters = SideBarComponent.BUILTIN_FILTERS.map(label => {
      return new TodoFilter(label, TodoFilters[label]);
    });

    this.activeRoute.queryParams.subscribe(this.handleQueryParams);
  }

}
