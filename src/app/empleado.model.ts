export class Empleado {
    constructor(name: string, lastName: string, position: string, salary: number) {
        this.name = name;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
    }

    name: string = '';
    lastName: string = '';
    position: string = '';
    salary: number = 0;
}