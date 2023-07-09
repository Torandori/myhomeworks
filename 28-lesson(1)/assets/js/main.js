import Circle from "./classes/Circle.js";
import Marker from "./classes/Marker.js";
import RefillableToken from "./classes/RefillableToken.js";
import Employee from "./classes/Employee.js";
import EmpTable from "./classes/EmpTable.js";



const circ1 = new Circle(50, 'red', 150, 150)

circ1.info();
circ1.draw();

window.applyRadius.addEventListener('click', () => {
  circ1.radius = document.getElementById('newRadius').valueAsNumber;
  circ1.info();
  circ1.draw();
})

const circ2 = new Circle(100, 'yellow', 250, 150)

circ2.draw();


// MARKER 
let refillableMarker = null;

window.applyColorText.addEventListener('click', () => {
  const color = document.getElementById('enteredColor').value;
  const text = document.getElementById('enteredText').value;
  if(!refillableMarker){
    refillableMarker = new RefillableToken(color, 100);
  } 
  refillableMarker.write(text);
})


window.refillMarker.addEventListener('click', () => {
  refillableMarker.refill();
  console.log(refillableMarker.inkLevel);
})

//EMPLOYEE 
let oneEmployee = new Employee(); // create empty obj

window.generateTable.addEventListener('click', () => {
  const name = document.getElementById('fullName').value;
  const position = document.getElementById('position').value;
  const age = document.getElementById('age').valueAsNumber;
  const salary = document.getElementById('salary').valueAsNumber;
  
  const newEmployee = new Employee(name, position, age, salary);
  oneEmployee.addEmployee(newEmployee); //add new obj to array with each click
  const employeesArr = oneEmployee.array;
  const table = new EmpTable(employeesArr);
  table.getHtml();

  window.fullName.value = '';
  window.position.value = '';
  window.age.value = '';
  window.salary.value = '';
})

