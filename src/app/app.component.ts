import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';

  constructor(private myService: ServicioEmpleadoService) {

  }

  employees: Empleado[] = [
    new Empleado(
      'Nuna',
      'Jackson',
      'Presidente',
      100000
    ),
    new Empleado(
      'Gina',
      'Amaya',
      'Directora',
      90000
    ),
    new Empleado(
      'Renata',
      'Kathya',
      'Empleado',
      95000
    ),
    new Empleado(
      'Caty',
      'Amaya',
      'Empleada',
      80000
    ),
  ];

  addEmployee() {
    let employee = new Empleado(
      this.inputName, 
      this.inputLastName,
      this.inputPosition,
      this.inputSalary
    );
    this.myService.showMessage(`Nombre del empleado: ${employee.name}`);
    this.employees.push(employee);
  }

  inputName: string = '';
  inputLastName: string = '';
  inputPosition: string = '';
  inputSalary: number = 0;

}
