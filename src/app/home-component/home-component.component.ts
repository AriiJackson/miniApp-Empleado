import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  title = 'Listado de Empleados';

  constructor(private myService: ServicioEmpleadoService, private employeeService: EmpleadosService) { 
    //this.employees = this.employeeService.employees;
  }

  ngOnInit(): void {
    this.employees = this.employeeService.employees;
  }

  employees: Empleado[] = [];

  addEmployee() {
    let employee = new Empleado(
      this.inputName, 
      this.inputLastName,
      this.inputPosition,
      this.inputSalary
    );
    //this.myService.showMessage(`Nombre del empleado: ${employee.name}`);
    //this.employees.push(employee);
    this.employeeService.addEmployeeService(employee);
  }

  inputName: string = '';
  inputLastName: string = '';
  inputPosition: string = '';
  inputSalary: number = 0;

}
