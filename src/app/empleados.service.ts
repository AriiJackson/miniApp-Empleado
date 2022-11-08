import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadoService } from "./servicio-empleado.service";

@Injectable()
export class EmpleadosService {
  constructor(private serviceMessage: ServicioEmpleadoService) {
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

    addEmployeeService(employee: Empleado) {
      this.serviceMessage.showMessage(`Persona agregada: ${employee.name} \n Salario: ${employee.salary}`);
      this.employees.push(employee);
    }
}