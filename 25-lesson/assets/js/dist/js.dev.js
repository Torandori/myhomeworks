"use strict";

var CART = [{
  name: 'Milk',
  qty: 2,
  price: 30.00,
  total: 60.00,
  isBuy: false
}];

function addToCart() {
  var name = document.getElementById("prod-name").value;
  var qty = document.getElementById("prod-qty").valueAsNumber;
  var price = document.getElementById("prod-price").valueAsNumber; // validation for inputs 

  if (name === '' || isNaN(price) || isNaN(qty)) {
    alert("Enter product info");
    return;
  } // if we did not find el with this name in cart, we add new el to arr 


  var ind = CART.findIndex(function (el) {
    return el.name === name;
  });

  if (ind !== -1) {
    CART[ind].qty += qty;
    CART[ind].total = CART[ind].qty * CART[ind].price;
    CART[ind].isBuy = false; //зкинути мітку що придбаний
  } else {
    // add el at the end of arr 
    CART.push({
      name: name,
      qty: qty,
      price: price,
      total: qty * price,
      isBuy: false
    });
  }

  ;
  document.getElementById("prod-name").value = '';
  document.getElementById("prod-qty").valueAsNumber = 1;
  document.getElementById("prod-price").value = '';
  alert('Successfully added to cart'); // console.log(CART);

  viewCartList();
} // Щоб працювало тыльки для тих елементыв якы додані 


function buyProduct(index1) {
  CART[index1].isBuy = true;
  viewCartList();
}

function removeProduct(index) {
  if (confirm('Delete product?')) {
    CART.splice(index, 1);
    viewCartList();
  }
}

function changeProductQty(index, operator) {
  if (operator === 'plus') {
    CART[index].qty++;
  } else {
    CART[index].qty--;

    if (CART[index].qty === 0) {
      removeProduct(index);
      return;
    }
  }

  CART[index].isBuy = false;
  CART[index].total = CART[index].qty * CART[index].price;
  viewCartList();
} // циклічно пройтись по елементам масиву, зібрати інф та додати в таблицю, просто формуэ циклічно html


function viewCartList() {
  var tBody = '';
  CART.forEach(function (product, index) {
    var badge = product.isBuy ? '<span class="badge text-bg-success">Bought</span>' : '<span class="badge text-bg-danger">Not bought</span>';
    tBody += "\n    <tr>\n      <td>".concat(product.name, "</td>\n      <td>").concat(badge, "</td>\n      <td>\n      <div class=\"input-group mb-3\">\n        <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeProductQty(").concat(index, ", 'minus')\">-</button>\n        <input type=\"number\" class=\"form-control\" placeholder=\"\" aria-label=\"Example text with two button addons\" value=\"").concat(product.qty, "\" readonly>\n        <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeProductQty(").concat(index, ", 'plus')\">+</button>\n      </div>\n      </td>\n      <td>").concat(product.price.toFixed(2), "</td>\n      <td>").concat(product.total.toFixed(2), "</td>\n      <td>\n        ").concat(!product.isBuy ? '<button type="button" class="btn btn-warning" onclick="buyProduct(' + index + ')">Buy</button>' : '', "\n        ").concat(!product.isBuy ? '<button type="button" class="btn btn-danger" onclick="removeProduct(' + index + ')">Delete</button>' : '', "\n      </td>\n    </tr>");
  });
  document.getElementById("cart_tbody").innerHTML = tBody;
}

viewCartList(); // Додавати кнопку bought тілтки коли isBuy = false 
// const getVal = id => document.getElementById(id).valueAsNumber;
// function showResult(id, text, mode = 'text') {
//   if(mode === 'text') {
//     document.getElementById(id).innerText = text;
//   } else if (mode === 'html') {
//     document.getElementById(id).innerHTML = text;
//   }
// }
// // ===
// let car = {
//   make: "Mercedes-Benz",
//   model: "GLS-Class SUV X167 4MATIC (4WD) 2019-2023", 
//   year: "2023",
//   "average speed": "130",
//   "fuel tank": "90 l (20 gal)",
//   "average fuel consumption per 100km": "9",
// };
// // Метод, який виводить на екран інформацію про автомобіль.
// car.displayInfo = function(){
//   let carInfoElement = document.getElementById("carInfo");
//   // let infoHTML = `
//   // <p><strong>Make:</strong> ${this.make}<p>
//   // <p><strong>Model:</strong> ${this.model}<p>
//   // <p><strong>Year:</strong> ${this.year}<p>
//   // <p><strong>Top Speed:</strong> ${this["average speed"]}
//   // <p><strong>Fuel Tank:</strong> ${this["fuel tank"]}
//   // <p><strong>Average fuel consumption per 100km:</strong> ${this["average fuel consumption per 100km"]}<p>`;
//   // carInfoElement.innerHTML = infoHTML;
//   let rez = '';
//   for(let key in car){
//     const val = car[key];
//     if(typeof(val) !== 'function'){
//       rez += `<p><strong>${key}: </strong>${val}<p>`;
//     }
//   }
//   carInfoElement.innerHTML = rez;
// }
// car.displayInfo();
// // ===
// function calcTime(s, v){
//   const totalTime = s / v;
//   const countBreaks = Math.floor((totalTime - 1) / 4);
//   const totalTimeWithBreaks = totalTime + countBreaks;
//   return (totalTimeWithBreaks).toFixed(2);
// }
// function calcFuel(distance, consump) {
//   const fuelNeed = (distance / 100) * consump;
//   return fuelNeed;
// }
// function calcTimeFuel() {
//   // debugger;
//   const num = getVal("distance");
//   // t = s / v 
//   // fuel = (s / 100) * 9(consumption per 100 km)
//   if(isNaN(num)) {
//     showResult("task_5_res", `Error, enter positive value`, 'text');
//     return false;
//   } 
//   res1 = calcTime(num, car["average speed"]);
//   res2 = calcFuel(num, car["average fuel consumption per 100km"]);
//   showResult("result_1", `Your trip wil take ${res1} hours. You need ${res2} l of fuel.`, 'text')
// }