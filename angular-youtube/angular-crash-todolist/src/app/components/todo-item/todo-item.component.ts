import { TodoService } from 'src/app/services/todo.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
  }

  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo: Todo) {
    // toggle UI
    todo.completed = !todo.completed;
    console.log('toggled')

    //toggle on a server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));

  }

  onDelete(todo: Todo) {
    console.log(`deleting item with ID: ${todo.id}`);
    this.deleteTodo.emit(todo);
  }


}
