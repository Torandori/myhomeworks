"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EmpTable =
/*#__PURE__*/
function () {
  function EmpTable(employees) {
    _classCallCheck(this, EmpTable);

    this.employees = employees;
  }

  _createClass(EmpTable, [{
    key: "getHtml",
    value: function getHtml() {
      var html = "<table class=\"table\">";
      html += "<thead><tr><th>Name</th><th>Position</th><th>Age</th><th>Salary</th></tr><thead>";
      this.employees.forEach(function (employee) {
        html += "<tbody>";
        html += "<tr>";
        html += "<td>".concat(employee.name, "</td>");
        html += "<td>".concat(employee.position, "</td>");
        html += "<td>".concat(employee.age, "</td>");
        html += "<td>".concat(employee.salary, "</td>");
        html += "</tr>";
        html += "</tbody>";
      });
      html += "</table>";
      console.log(html);
      window.showTable.innerHTML = html;
      return html;
    }
  }]);

  return EmpTable;
}(); // let htmlCode = `
// <table>
//   
//     <tr>
//       <th>Name</th>
//       <th>Position</th>
//       <th>Age</th>
//       <th>Salary</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>${this.name}</td>
//       <td>${this.position}</td>
//       <td>${this.age}</td>
//       <td>${this.salary}</td>
//     </tr>
//   </tbody>
// </table>
// `
// document.getElementById('showTable').innerHTML = htmlCode;


exports["default"] = EmpTable;