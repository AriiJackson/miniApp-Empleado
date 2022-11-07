import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-componente-hijo-empleado',
  templateUrl: './componente-hijo-empleado.component.html',
  styleUrls: ['./componente-hijo-empleado.component.css']
})
export class ComponenteHijoEmpleadoComponent implements OnInit {

  // Conexion de componente padre a hijo 
  @Input() e: Empleado;
  @Input() i: number;

  constructor() { }

  ngOnInit(): void {
  }

  arrayCaracteristicas = [''];

  addCaracteristicas(newValue: string) {
    this.arrayCaracteristicas.push(newValue);
  }

}
