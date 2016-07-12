import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  templateUrl: 'todo-app.component.html',
  styleUrls: ['todo-app.component.css'],
  providers: [ TodoService ]
})
export class TodoAppComponent implements OnInit {
  errorMessage: string;
  newTodo: Todo = new Todo();
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  addTodo() {
    this.todoService
      .addTodo(this.newTodo)
      .subscribe(
        todo => this.todos.push(todo),
        error => this.errorMessage = <any>error
      );
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    this.todoService
      .updateTodo(todo)
      .subscribe(() => {}, error => this.errorMessage = <any>error);
  }

  removeTodo(todo) {
    this.todoService
      .deleteTodoById(todo.id)
      .subscribe(
        () => this.removeTodoById(todo.id),
        error => this.errorMessage = <any>error
      );
  }

  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  removeTodoById(id) {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
  }

  getTodos() {
    return this.todoService
      .getAllTodos()
      .subscribe(
        todos => this.todos = todos,
        error =>  this.errorMessage = <any>error
      );
  }

}
