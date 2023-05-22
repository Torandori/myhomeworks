const a = ('Viktoria Vashchuk');
let distance
let time
let length
let currentYear
// const distanse
// const tame
// let lengh
/* let carrentYear
   let usename */

function userName() {
  const username = prompt('Enter your name');

  if(username){
    alert(`Hello, ${username}!`);
  } 
}
function userBirthDate() {
  const currentYear = new Date().getFullYear();
  const year = +prompt('Enter your birth year');
  let result = 0;

  if(year >= 1900){
    result = currentYear - year;
    alert(result);
  } else {
    alert('Enter number from 1900')
  }
}
function squarePerimeter(){
  const squareSideLength = +prompt('Enter square side length in cm');
  let result = 0;

  if(!Number.isNaN(squareSideLength) && squareSideLength != ''){
    result = squareSideLength * 4;
    alert(`${result} cm`);
  } else {
    alert('Enter correct number')
  }
}
function radius(){
  const radius = parseInt(prompt('Enter the circle radius in cm'));
  let result = 0;

  if(!isNaN(radius) && radius != ''){
    result = +  (Math.pow((Math.PI * radius), 2)).toFixed(2);
    alert(`${result} cm^2`);
  } else {
    alert('Enter correct number')
  }
}
function speed(){
  const distance = +prompt('Enter the distance in km');
  const time = +prompt('Enter the time in hours');
  let result = 0;

  if(!Number.isNaN(distance) && distance != '' && !Number.isNaN(time) && time != ''){
    result = (distance / time);
    alert(`${result} km / hour`);
  } else {
    alert('Enter correct number')
  }
}

function currencyConvert() {
  const number = +prompt('Enter amount in USD');
  const e = 0.92;
  let result = 0;
  if (number) {
    result = +((number * e).toFixed(2));
    alert(`${number} USD = ${result} EUR`);
  } else {
    alert('Please enter number');
  }
}