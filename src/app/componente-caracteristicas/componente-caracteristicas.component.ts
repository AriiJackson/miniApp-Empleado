import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-caracteristicas',
  templateUrl: './componente-caracteristicas.component.html',
  styleUrls: ['./componente-caracteristicas.component.css']
})
export class ComponenteCaracteristicasComponent implements OnInit {

  @Output() newCaracteristica = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addCaracteristica(value: string) {
    this.newCaracteristica.emit(value);
  }

}
