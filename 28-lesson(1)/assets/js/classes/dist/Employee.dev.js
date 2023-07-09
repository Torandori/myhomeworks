"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Employee =
/*#__PURE__*/
function () {
  function Employee(name, position, age, salary) {
    _classCallCheck(this, Employee);

    this.name = name;
    this.position = position;
    this.age = age;
    this.salary = salary;
    this.employees = [];
  }

  _createClass(Employee, [{
    key: "addEmployee",
    value: function addEmployee(employee) {
      this.employees.push(employee);
    }
  }, {
    key: "array",
    get: function get() {
      return this.employees;
    }
  }]);

  return Employee;
}();

exports["default"] = Employee;