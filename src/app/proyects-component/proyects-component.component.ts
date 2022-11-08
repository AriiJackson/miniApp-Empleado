import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-proyects-component',
  templateUrl: './proyects-component.component.html',
  styleUrls: ['./proyects-component.component.css']
})
export class ProyectsComponentComponent implements OnInit {

  constructor(private router: Router, private myService: ServicioEmpleadoService, private employeeService: EmpleadosService) { 
  }

  ngOnInit(): void {
    this.employees = this.employeeService.employees;
  }

  backHome() {
    this.router.navigate(['']);
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
