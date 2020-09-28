import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos=[{
    label: "Masala-Dosa"
  },
{
  label:"Idli"
},
{
  label:"virgin-mojito"
},
{
  label:"white sauce pasta"
}];
lengthoflist=this.todos.length;
  constructor(private shared : SharedService) { }

  ngOnInit(): void {
    this.shared.setMessage(this.lengthoflist)
  }

}
