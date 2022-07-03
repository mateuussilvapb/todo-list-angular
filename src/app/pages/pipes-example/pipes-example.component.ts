import { Component, OnInit } from '@angular/core';

// ======================================= //
@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss'],
})
export class PipesExampleComponent implements OnInit {
  // ======================================= //
  constructor() {}
  // ======================================= //
  number = 0;
  // ======================================= //
  text = 'hElLo WoRlD!';
  // ======================================= //
  date = new Date();
  // ======================================= //
  pessoa = {
    nome: 'Mateus',
    idade: '25',
    profissao: 'Desenvolvedor',
  };
  // ======================================= //
  nomes = ['Mateus'];
  // ======================================= //
  ngOnInit(): void {}
  // ======================================= //
  mudaValor() {
    this.number = 123456789;
  }
  add(text: string) {
    this.nomes.push(text);
  }
}
