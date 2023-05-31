function secondGrade() {
  const number = +prompt('Enter number');
  let result = 0;
  
  if(number) {
    result = Math.pow(number, 2);
    // result = number * number;
    alert(`Result = ${result}`);
  } else {
    alert(`Enter correct number`);
  }
}

function calcMiddle() {
  const number1 = parseInt(prompt('Enter first number'));
  const number2 = parseInt(prompt('Enter second number'));

  let result = (number1 + number2) / 2;

  alert(result);
}

function revert() {
  const number = +prompt('Enter number');
  let result = 0;
  // 12345 => 51234
  if (number >= 10000 && number <= 99999) {
    result = ((number % 10) * 10000) + Math.trunc(number / 10);
    alert(result);
  } else {
    alert('Please enter number between 10000 and 99999');
  }
}
function km2ml() {
  const number = +prompt('Enter km');
  const k = 0.621371;
  let result = 0;
  if (number) {
    result = number * k;
    alert(`in ${number}km - ${result}ml`);
  } else {
    alert('Please enter number');
  }
}