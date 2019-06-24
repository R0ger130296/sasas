import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leerdatos',
  templateUrl: './leerdatos.component.html',
  styleUrls: ['./leerdatos.component.scss']
})
export class LeerdatosComponent implements OnInit {

  constructor() { }
  TablaSelecionada:number
  tablas:string[]
  ngOnInit() {
    this.tablas=['persona','productos']
    this.TablaSelecionada=999;
  }
  leerDatos(){
    alert(`la tabla selecionada es la numero ${this.TablaSelecionada}, ${this.tablas[this.TablaSelecionada]}`)
  }
}
