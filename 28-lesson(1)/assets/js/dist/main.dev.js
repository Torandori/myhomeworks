"use strict";

var _Circle = _interopRequireDefault(require("./classes/Circle.js"));

var _Marker = _interopRequireDefault(require("./classes/Marker.js"));

var _RefillableToken = _interopRequireDefault(require("./classes/RefillableToken.js"));

var _Employee = _interopRequireDefault(require("./classes/Employee.js"));

var _EmpTable = _interopRequireDefault(require("./classes/EmpTable.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var circ1 = new _Circle["default"](50, 'red', 150, 150);
circ1.info();
circ1.draw();
window.applyRadius.addEventListener('click', function () {
  circ1.radius = document.getElementById('newRadius').valueAsNumber;
  circ1.info();
  circ1.draw();
});
var circ2 = new _Circle["default"](100, 'yellow', 250, 150);
circ2.draw(); // MARKER 

var refillableMarker = null;
window.applyColorText.addEventListener('click', function () {
  var color = document.getElementById('enteredColor').value;
  var text = document.getElementById('enteredText').value;

  if (!refillableMarker) {
    refillableMarker = new _RefillableToken["default"](color, 100);
  }

  refillableMarker.write(text);
});
window.refillMarker.addEventListener('click', function () {
  refillableMarker.refill();
  console.log(refillableMarker.inkLevel);
}); //EMPLOYEE 

var oneEmployee = new _Employee["default"](); // create empty obj

window.generateTable.addEventListener('click', function () {
  var name = document.getElementById('fullName').value;
  var position = document.getElementById('position').value;
  var age = document.getElementById('age').valueAsNumber;
  var salary = document.getElementById('salary').valueAsNumber;
  var newEmployee = new _Employee["default"](name, position, age, salary);
  oneEmployee.addEmployee(newEmployee); //add new obj to array with each click

  var employeesArr = oneEmployee.array;
  var table = new _EmpTable["default"](employeesArr);
  table.getHtml();
  window.fullName.value = '';
  window.position.value = '';
  window.age.value = '';
  window.salary.value = '';
});