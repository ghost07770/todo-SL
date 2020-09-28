import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos = [
    {
      label: 'Walk',
    },
    {
      label: 'Run',
    },
    {
      label: 'Yoga',
    },
    {
      label: 'Gym',
    },
  ];
  lengthoflist = this.todos.length;
  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.shared.setMessage(this.lengthoflist);
  }
}
