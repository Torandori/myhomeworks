export default class EmpTable {
  constructor(employees){
    this.employees = employees;
  }
  getHtml() {
    let html = `<table class="table">`;
    html += `<thead><tr><th>Name</th><th>Position</th><th>Age</th><th>Salary</th></tr><thead>`;
    
    this.employees.forEach(employee => {
      html += "<tbody>";
      html += "<tr>";
      html += `<td>${employee.name}</td>`;
      html += `<td>${employee.position}</td>`;
      html += `<td>${employee.age}</td>`;
      html += `<td>${employee.salary}</td>`;
      html += `</tr>`;
      html += `</tbody>`;
    });

    html += `</table>`;
    console.log(html);
    window.showTable.innerHTML = html;
    return html;
  }
}

    // let htmlCode = `
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