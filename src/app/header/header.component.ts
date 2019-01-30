import { Component, OnInit, ViewChild } from '@angular/core';
import { TodosDataService } from '../todos-data.service';
import { ITodo } from '../todo/ITodo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('searchBox') searchBox;

  private suggestions: ITodo[] = [];

  constructor(private todosData: TodosDataService) { }

  ngOnInit() {
  }

  search(event) {
    const value = event.target.value;
    if (!value) {
      this.suggestions = [];
    } else {
      this.suggestions = this.todosData.match(value);
    }
  }

  clearSearch() {
    this.suggestions = [];
    this.searchBox.nativeElement.value = '';
  }

}
