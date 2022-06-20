import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// ======================================= //
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  // ======================================= //
  constructor() {}
  // ======================================= //
  @Input() btnText: string = 'Clique';
  // ======================================= //
  @Input() btnType: string = '';
  // ======================================= //
  @Output() clickChildren = new EventEmitter();
  // ======================================= //
  textFilho = 'clicou no filho';
  // ======================================= //
  ngOnInit(): void {}
  // ======================================= //
  clicou() {
    this.clickChildren.emit(this.textFilho);
  }
}
