"use strict";

var a = 'Viktoria Vashchuk';
var distance;
var time;
var length;
var currentYear; // const distanse
// const tame
// let lengh

/* let carrentYear
   let usename */

function userName() {
  var username = prompt('Enter your name');

  if (username) {
    alert("Hello, ".concat(username, "!"));
  }
}

function userBirthDate() {
  var currentYear = new Date().getFullYear();
  var year = +prompt('Enter your birth year');
  var result = 0;

  if (year >= 1900) {
    result = currentYear - year;
    alert(result);
  } else {
    alert('Enter number from 1900');
  }
}

function squarePerimeter() {
  var squareSideLength = +prompt('Enter square side length in cm');
  var result = 0;

  if (!Number.isNaN(squareSideLength) && squareSideLength != '') {
    result = squareSideLength * 4;
    alert("".concat(result, " cm"));
  } else {
    alert('Enter correct number');
  }
}

function radius() {
  var radius = parseInt(prompt('Enter the circle radius in cm'));
  var result = 0;

  if (!isNaN(radius) && radius != '') {
    result = +Math.pow(Math.PI * radius, 2).toFixed(2);
    alert("".concat(result, " cm^2"));
  } else {
    alert('Enter correct number');
  }
}

function speed() {
  var distance = +prompt('Enter the distance in km');
  var time = +prompt('Enter the time in hours');
  var result = 0;

  if (!Number.isNaN(distance) && distance != '' && !Number.isNaN(time) && time != '') {
    result = distance / time;
    alert("".concat(result, " km / hour"));
  } else {
    alert('Enter correct number');
  }
}

function currencyConvert() {
  var number = +prompt('Enter amount in USD');
  var e = 0.92;
  var result = 0;

  if (number) {
    result = +(number * e).toFixed(2);
    alert("".concat(number, " USD = ").concat(result, " EUR"));
  } else {
    alert('Please enter number');
  }
}