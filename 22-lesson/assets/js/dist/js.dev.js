"use strict";

function userAge() {
  var age = document.getElementById("task_1_number").valueAsNumber;

  if (!isNaN(age) && age < 12 && age > 0 && age !== 0) {
    document.getElementById("task_1_result").innerHTML = "<i style=\"color: green\">Child</i>";
  } else if (age >= 12 && age < 18) {
    document.getElementById("task_1_result").innerHTML = "<i style=\"color: green\">Teenager</i>";
  } else if (age >= 18 && age < 60) {
    document.getElementById("task_1_result").innerHTML = "<i style=\"color: green\">Adult</i>";
  } else if (age >= 60 && age <= 100) {
    document.getElementById("task_1_result").innerHTML = "<i style=\"color: green\">Senior</i>";
  } else {
    document.getElementById("task_1_result").innerHTML = "<i style=\"color: red\">Enter value from 0 till 100</i>";
    return;
  }
}

function symbol() {
  var age = document.getElementById("task_1_number").valueAsNumber;

  if (!isNaN(age) && age < 12 && age > 0 && age !== 0) {
    document.getElementById("task_1_result").innerHTML = "<i style=\"color: green\">Child</i>";
  } else if (age >= 12 && age < 18) {
    document.getElementById("task_1_result").innerHTML = "<i style=\"color: green\">Teenager</i>";
  } else if (age >= 18 && age < 60) {
    document.getElementById("task_1_result").innerHTML = "<i style=\"color: green\">Adult</i>";
  } else if (age >= 60 && age <= 100) {
    document.getElementById("task_1_result").innerHTML = "<i style=\"color: green\">Senior</i>";
  } else {
    document.getElementById("task_1_result").innerHTML = "<i style=\"color: red\">Enter value from 0 till 100</i>";
    return;
  }
}

function symbol1() {
  var number = document.getElementById("task_2_number").valueAsNumber;

  switch (number) {
    case 0:
      document.getElementById("task_2_result").innerHTML = "<i style=\"color: green\">)</i>";
      break;

    case 1:
      document.getElementById("task_2_result").innerHTML = "<i style=\"color: green\">!</i>";
      break;

    case 2:
      document.getElementById("task_2_result").innerHTML = "<i style=\"color: green\">@</i>";
      break;

    case 3:
      document.getElementById("task_2_result").innerHTML = "<i style=\"color: green\">#</i>";
      break;

    case 4:
      document.getElementById("task_2_result").innerHTML = "<i style=\"color: green\">$</i>";
      break;

    case 5:
      document.getElementById("task_2_result").innerHTML = "<i style=\"color: green\">%</i>";
      break;

    case 6:
      document.getElementById("task_2_result").innerHTML = "<i style=\"color: green\">^</i>";
      break;

    case 7:
      document.getElementById("task_2_result").innerHTML = "<i style=\"color: green\">&</i>";
      break;

    case 8:
      document.getElementById("task_2_result").innerHTML = "<i style=\"color: green\">*</i>";
      break;

    case 9:
      document.getElementById("task_2_result").innerHTML = "<i style=\"color: green\">(</i>";
      break;

    default:
      document.getElementById("task_2_result").innerHTML = "<i style=\"color: red\">It is not valid value</i>";
  }
}