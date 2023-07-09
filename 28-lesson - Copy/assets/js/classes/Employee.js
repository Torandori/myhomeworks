export default class Employee {
  constructor(name, position, age, salary){
    this.name = name;
    this.position = position;
    this.age = age;
    this.salary = salary;
    this.employees = [];
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
  get array(){
    return this.employees;
  }
}