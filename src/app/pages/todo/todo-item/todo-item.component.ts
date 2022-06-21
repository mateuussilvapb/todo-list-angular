import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';

// ======================================= //
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  // ======================================= //
  constructor() {}
  // ======================================= //
  @Input() todo: Todo = { id: 0, title: '', done: false };
  // ======================================= //
  @Output() remove = new EventEmitter();
  // ======================================= //
  done = false;
  // ======================================= //
  ngOnInit(): void {}
  // ======================================= //
  removeTodo() {
    this.remove.emit(this.todo);
  }
  // ======================================= //
  markAsDone() {
    this.done = !this.done;
    this.todo.done = this.done;
  }
}
