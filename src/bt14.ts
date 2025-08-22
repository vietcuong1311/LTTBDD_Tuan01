class Employee {

}

export class Manager extends Employee {
    manage() { return "Managing..."; }
}
export class Developer extends Employee {
    code() { return "Coding..."; }
}