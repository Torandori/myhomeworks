const getVal = id => document.getElementById(id).valueAsNumber;

function showResult(id, text, mode = 'text') {
  if(mode === 'text') {
    document.getElementById(id).innerText = text;
  } else if (mode === 'html') {
    document.getElementById(id).innerHTML = text;
  }
}
// ===
let car = {
  make: "Mercedes-Benz",
  model: "GLS-Class SUV X167 4MATIC (4WD) 2019-2023", 
  year: "2023",
  "average speed": "130",
  "fuel tank": "90 l (20 gal)",
  "average fuel consumption per 100km": "9",
};
// Метод, який виводить на екран інформацію про автомобіль.
car.displayInfo = function(){
  let carInfoElement = document.getElementById("carInfo");
  // let infoHTML = `
  // <p><strong>Make:</strong> ${this.make}<p>
  // <p><strong>Model:</strong> ${this.model}<p>
  // <p><strong>Year:</strong> ${this.year}<p>
  // <p><strong>Top Speed:</strong> ${this["average speed"]}
  // <p><strong>Fuel Tank:</strong> ${this["fuel tank"]}
  // <p><strong>Average fuel consumption per 100km:</strong> ${this["average fuel consumption per 100km"]}<p>`;
  // carInfoElement.innerHTML = infoHTML;

  let rez = '';
  for(let key in car){
    const val = car[key];
    if(typeof(val) !== 'function'){
      rez += `<p><strong>${key}: </strong>${val}<p>`;
    }
  }
  carInfoElement.innerHTML = rez;
}
car.displayInfo();

// ===
function calcTime(s, v){
  const totalTime = s / v;
  const countBreaks = Math.floor((totalTime - 1) / 4);

  const totalTimeWithBreaks = totalTime + countBreaks;

  return (totalTimeWithBreaks).toFixed(2);
}

function calcFuel(distance, consump) {
  const fuelNeed = (distance / 100) * consump;
  return fuelNeed;
}

function calcTimeFuel() {
  // debugger;
  const num = getVal("distance");
  // t = s / v 
  // fuel = (s / 100) * 9(consumption per 100 km)

  if(isNaN(num)) {
    showResult("task_5_res", `Error, enter positive value`, 'text');
    return false;
  } 

  res1 = calcTime(num, car["average speed"]);
  res2 = calcFuel(num, car["average fuel consumption per 100km"]);


  showResult("result_1", `Your trip wil take ${res1} hours. You need ${res2} l of fuel.`, 'text')
}

