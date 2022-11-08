import { Empleado } from "./empleado.model";

export class EmpleadosService {
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
        this.employees.push(employee);
    }
}