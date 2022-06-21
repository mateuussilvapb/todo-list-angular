import { Todo } from './../../../models/todo';
import { Component, OnInit } from '@angular/core';

// ======================================= //
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  // ======================================= //
  constructor() {}
  // ======================================= //
  todos: Array<Todo> = [];
  // ======================================= //
  ngOnInit(): void {
    let items = localStorage.getItem('todos');
    if (items) {
      this.todos = JSON.parse(items);
    } else {
      this.todos;
    }
  }
  // ======================================= //
  addTodo(title: string) {
    const id = this.todos.length + 1;
    let todo: Todo = {
      id: id,
      title: title,
      done: false,
    };
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  // ======================================= //
  removeTodo(todo: any) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
