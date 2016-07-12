import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  private ENDPOINT_URL: string = 'http://localhost:5000/api/todos';
  private headers: Headers;
  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
  }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    let body = JSON.stringify(todo);
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.ENDPOINT_URL,
      body,
      options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  // DELETE /todos/:id
  deleteTodoById(id: number)  {
    let options = new RequestOptions({
      headers: this.headers
    });
    let url = `${this.ENDPOINT_URL}/${id}/`;
    return this.http
      .delete(url, options)
      .catch(this.handleError);
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // GET api/todos/
  getAllTodos(): Observable<Todo[]> {
    return this.http
      .get(this.ENDPOINT_URL)
      .map(res => res.json())
      .catch(this.handleError);
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
