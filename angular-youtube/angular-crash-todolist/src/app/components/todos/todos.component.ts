import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  someName: string = 'Bla';

  todos: Todo[];
  constructor() { 
    this.todos = [
    {
      id: 1,
      title: 'Test title 1',
      completed: true 
    },
    {
      id: 2,
      title: 'Test title 2',
      completed: false 
    },
    {
      id: 3,
      title: 'Test title 3',
      completed: true 
    },
  ]
  }

  ngOnInit() {
  }

}
