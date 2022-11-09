import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadoService } from '../servicio-empleado.service';


@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private myService: ServicioEmpleadoService, private employeeService: EmpleadosService) {
  }

  ngOnInit(): void {
    this.employees = this.employeeService.employees;
    this.index = this.route.snapshot.params['id'];

    let employeeFind: Empleado = this.employeeService.findEmployee(this.index);

    this.inputName = employeeFind.name;
    this.inputLastName = employeeFind.lastName;
    this.inputPosition = employeeFind.position;
    this.inputSalary = employeeFind.salary;
  }

  backHome() {
    this.router.navigate(['']);
  }

  employees: Empleado[] = [];

  updateEmployee() {
    let employee = new Empleado(
      this.inputName,
      this.inputLastName,
      this.inputPosition,
      this.inputSalary
    );
    //this.myService.showMessage(`Nombre del empleado: ${employee.name}`);
    //this.employees.push(employee);
    this.employeeService.updateEmployeeService(this.index, employee);

    this.router.navigate(['']);
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.index);
    this.router.navigate(['']);
  }

  inputName: string = '';
  inputLastName: string = '';
  inputPosition: string = '';
  inputSalary: number = 0;

  index: number;
}
