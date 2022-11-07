import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-componente-caracteristicas',
  templateUrl: './componente-caracteristicas.component.html',
  styleUrls: ['./componente-caracteristicas.component.css']
})
export class ComponenteCaracteristicasComponent implements OnInit {

  @Output() newCaracteristica = new EventEmitter<string>();

  constructor(private myService: ServicioEmpleadoService) { }

  ngOnInit(): void {
  }

  addCaracteristica(value: string) {
    this.myService.showMessage(value);
    this.newCaracteristica.emit(value);
  }

}
