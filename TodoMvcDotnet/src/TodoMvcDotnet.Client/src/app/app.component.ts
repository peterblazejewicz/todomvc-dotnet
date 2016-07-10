import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { TodoAppComponent } from './todo-app';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TodoAppComponent],
  providers: [ HTTP_PROVIDERS ]
})
export class AppComponent {
}
