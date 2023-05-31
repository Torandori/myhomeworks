"use strict";

var getVal = function getVal(id) {
  return document.getElementById(id).valueAsNumber;
};

function showResult(id, text) {
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';

  if (mode === 'text') {
    document.getElementById(id).innerText = text;
  } else if (mode === 'html') {
    document.getElementById(id).innerHTML = text;
  }
} // ===


var car = {
  make: "Mercedes-Benz",
  model: "GLS-Class SUV X167 4MATIC (4WD) 2019-2023",
  year: "2023",
  "average speed": "130",
  "fuel tank": "90 l (20 gal)",
  "average fuel consumption per 100km": "9"
}; // Метод, який виводить на екран інформацію про автомобіль.

car.displayInfo = function () {
  var carInfoElement = document.getElementById("carInfo"); // let infoHTML = `
  // <p><strong>Make:</strong> ${this.make}<p>
  // <p><strong>Model:</strong> ${this.model}<p>
  // <p><strong>Year:</strong> ${this.year}<p>
  // <p><strong>Top Speed:</strong> ${this["average speed"]}
  // <p><strong>Fuel Tank:</strong> ${this["fuel tank"]}
  // <p><strong>Average fuel consumption per 100km:</strong> ${this["average fuel consumption per 100km"]}<p>`;
  // carInfoElement.innerHTML = infoHTML;

  var rez = '';

  for (var key in car) {
    var val = car[key];

    if (typeof val !== 'function') {
      rez += "<p><strong>".concat(key, ": </strong>").concat(val, "<p>");
    }
  }

  carInfoElement.innerHTML = rez;
};

car.displayInfo(); // ===

function calcTime(s, v) {
  var totalTime = s / v;
  var countBreaks = Math.floor((totalTime - 1) / 4);
  var totalTimeWithBreaks = totalTime + countBreaks;
  return totalTimeWithBreaks.toFixed(2);
}

function calcFuel(distance, consump) {
  var fuelNeed = distance / 100 * consump;
  return fuelNeed;
}

function calcTimeFuel() {
  // debugger;
  var num = getVal("distance"); // t = s / v 
  // fuel = (s / 100) * 9(consumption per 100 km)

  if (isNaN(num)) {
    showResult("task_5_res", "Error, enter positive value", 'text');
    return false;
  }

  res1 = calcTime(num, car["average speed"]);
  res2 = calcFuel(num, car["average fuel consumption per 100km"]);
  showResult("result_1", "Your trip wil take ".concat(res1, " hours. You need ").concat(res2, " l of fuel."), 'text');
}