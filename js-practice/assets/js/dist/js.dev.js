"use strict";

function secondGrade() {
  var number = +prompt('Enter number');
  var result = 0;

  if (number) {
    result = Math.pow(number, 2); // result = number * number;

    alert("Result = ".concat(result));
  } else {
    alert("Enter correct number");
  }
}

function calcMiddle() {
  var number1 = parseInt(prompt('Enter first number'));
  var number2 = parseInt(prompt('Enter second number'));
  var result = (number1 + number2) / 2;
  alert(result);
}

function revert() {
  var number = +prompt('Enter number');
  var result = 0; // 12345 => 51234

  if (number >= 10000 && number <= 99999) {
    result = number % 10 * 10000 + Math.trunc(number / 10);
    alert(result);
  } else {
    alert('Please enter number between 10000 and 99999');
  }
}

function km2ml() {
  var number = +prompt('Enter km');
  var k = 0.621371;
  var result = 0;

  if (number) {
    result = number * k;
    alert("in ".concat(number, "km - ").concat(result, "ml"));
  } else {
    alert('Please enter number');
  }
}