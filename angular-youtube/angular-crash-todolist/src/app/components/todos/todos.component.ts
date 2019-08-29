import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  someName: string = 'Bla';
  todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todoService.getTodosHttp().subscribe(todos => this.todos = todos);
  }

  ngOnInit() {
  }

  deleteTodo(todo: Todo) {
    console.log('delete me');
    // remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // remove from Server
    this.todoService.deleteTodo(todo).subscribe(t=> console.log(`*** Done deleting Todo with ID: ${todo.id} ***`));
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(t => {this.todos.push(t)});
  }

}
