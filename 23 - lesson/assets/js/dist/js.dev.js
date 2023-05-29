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
} // *******#GENERAL func 


function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function task4() {
  var num = getVal("task_4_num");
  var res = factorial(num);
  showResult("task_4_res", "<i>".concat(res, "</i>"), 'html');
} // =======


function square(w, h) {
  if (isNaN(h)) {
    h = w;
  }

  return w * h;
}

function task6() {
  var width = getVal("task_6_num");
  var height = getVal("task_6_num2");
  res = square(width, height);
  showResult("task_6_res", "Square of shape is <i>".concat(res, "</i>"), 'html');
} // ========


function findDividorsSum(number) {
  var sum = 0;

  for (var i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  sum += 1;
  return sum;
}

function perfect(sumDiv, initnumber) {
  if (sumDiv === initnumber) {
    return 'perfect';
  } else {
    return 'unperfect';
  }
}

function task7() {
  debugger;
  var num = getVal("task_7_num");

  if (isNaN(num)) {
    showResult("task_7_res", "Error, enter value", 'text');
    return false;
  } // debugger;


  var sum = findDividorsSum(num);
  var res = perfect(sum, num);
  showResult("task_7_res", "Your number is ".concat(res), 'text');
} // FUNC to interact


function task1() {
  var num1 = getVal("task_1_1");
  var num2 = getVal("task_1_2");
  var result = compare(num1, num2);
  showResult("task_1_result", "Your res is <b>".concat(result, "</b>"), 'html'); // document.getElementById("task_1_result").innerText = `Your res is <b>${result}</b>`;
} // function userAge() {
//   const age = document.getElementById("task_1_number").valueAsNumber;
//   if(!isNaN(age) && age < 12 && age > 0 && age !== 0 ) {
//     document.getElementById("task_1_result").innerHTML = `<i style="color: green">Child</i>`;
//   } else if (age >= 12 && age < 18) {
//     document.getElementById("task_1_result").innerHTML = `<i style="color: green">Teenager</i>`;
//   } else if (age >= 18 && age < 60) {
//     document.getElementById("task_1_result").innerHTML = `<i style="color: green">Adult</i>`;
//   } else if (age >=60 && age <= 100) {
//     document.getElementById("task_1_result").innerHTML = `<i style="color: green">Senior</i>`;
//   } else {
//     document.getElementById("task_1_result").innerHTML = `<i style="color: red">Enter value from 0 till 100</i>`;
//     return ; 
//   }
// }
// // function symbol() {
// //   const age = document.getElementById("task_1_number").valueAsNumber;
// //   if(!isNaN(age) && age < 12 && age > 0 && age !== 0 ) {
// //     document.getElementById("task_1_result").innerHTML = `<i style="color: green">Child</i>`;
// //   } else if (age >= 12 && age < 18) {
// //     document.getElementById("task_1_result").innerHTML = `<i style="color: green">Teenager</i>`;
// //   } else if (age >= 18 && age < 60) {
// //     document.getElementById("task_1_result").innerHTML = `<i style="color: green">Adult</i>`;
// //   } else if (age >=60 && age <= 100) {
// //     document.getElementById("task_1_result").innerHTML = `<i style="color: green">Senior</i>`;
// //   } else {
// //     document.getElementById("task_1_result").innerHTML = `<i style="color: red">Enter value from 0 till 100</i>`;
// //     return ; 
// //   }
// // }
// function symbol() {
//   const number = document.getElementById("task_2_number").valueAsNumber;
//   switch(number) {
//     case 0:
//       document.getElementById("task_2_result").innerHTML = `<i style="color: green">)</i>`;
//     break;
//     case 1:
//       document.getElementById("task_2_result").innerHTML = `<i style="color: green">!</i>`;
//     break;
//     case 2:
//       document.getElementById("task_2_result").innerHTML = `<i style="color: green">@</i>`;
//     break;
//     case 3:
//       document.getElementById("task_2_result").innerHTML = `<i style="color: green">#</i>`;
//     break;
//     case 4:
//       document.getElementById("task_2_result").innerHTML = `<i style="color: green">$</i>`;
//     break;
//     case 5:
//       document.getElementById("task_2_result").innerHTML = `<i style="color: green">%</i>`;
//     break;
//     case 6:
//       document.getElementById("task_2_result").innerHTML = `<i style="color: green">^</i>`;
//     break;
//     case 7:
//       document.getElementById("task_2_result").innerHTML = `<i style="color: green">&</i>`;
//     break;
//     case 8:
//       document.getElementById("task_2_result").innerHTML = `<i style="color: green">*</i>`;
//     break;
//     case 9:
//       document.getElementById("task_2_result").innerHTML = `<i style="color: green">(</i>`;
//     break;
//     default:
//     document.getElementById("task_2_result").innerHTML = `<i style="color: red">It is not valid value</i>`;
//   }
// }
// function sum() {
//   const num = document.getElementById("task_3_number").valueAsNumber;
//   const num1 = document.getElementById("task_3_number1").valueAsNumber;
//   let result = 0;
//   if (isNaN(num)) {
//     document.getElementById("task_3_result").innerHTML = `<i style="color: red">Enter value</i>`;
//     return false;
//   }
//   for(let i=num;i<=num1;i++) {
//     result += i;
//   }
//   document.getElementById("task_3_result").innerHTML = `<i style="color: red">${result}</i>`;
// }
// function commonDivisor() {
//   const num = document.getElementById("task_4_number").valueAsNumber;
//   const num1 = document.getElementById("task_4_number1").valueAsNumber;
//   let result = 0;
//   if (isNaN(num)) {
//     document.getElementById("task_4_result").innerHTML = `<i style="color: red">Enter a value</i>`;
//     return false;
//   }
//   for(let i = 1; i <= num && i <= num1; i++){
//     if(num % i === 0 && num1 % i === 0) {
//       result = i;
//     }
//   }
//   document.getElementById("task_4_result").innerHTML = `<i style="color: red">${result}</i>`;
// }
// function countDivisor() {
//   const num = document.getElementById("task_5_number").valueAsNumber;
//   let result = '';
//   if (isNaN(num)) {
//     document.getElementById("task_5_result").innerHTML = `<i style="color: red">Enter value</i>`;
//     return false;
//   }
//   for(let i=1;i<=num / 2;i++) {
//     if(num % i === 0){
//       result += i + ', ';
//     }
//   }
//   result += num;
//   document.getElementById("task_5_result").innerHTML = `<i style="color: red">${result}</i>`;
// }
// function palindrome() {
//   const num = document.getElementById("task_1_normal_number").valueAsNumber;
//   let result = '';
//   if (isNaN(num)) {
//     document.getElementById("task_1_normal_result").innerHTML = `<i style="color: red">Enter five-digit value</i>`;
//     return false;
//   }
//   if(Math.trunc(num / 10000) === num % 10 && Math.trunc((num / 1000) % 10) === Math.trunc((num % 100) / 10)) {
//     document.getElementById("task_1_normal_result").innerHTML = `<i style="color: green">The digit is palindrome</i>`;
//   } else {
//     document.getElementById("task_1_normal_result").innerHTML = `<i style="color: red">The digit is NOT palindrome</i>`;
//   }
// }
// function beforeDiscount() {
//   const amount = document.getElementById("task_2_normal_number").valueAsNumber;
//   let result = '';
//   if (isNaN(amount)) {
//     document.getElementById("task_2_normal_result").innerHTML = `<i style="color: red">Enter a value</i>`;
//     return false;
//   }
//   if (amount >= 200 && amount <= 300) {
//     result = (amount / (1 - 0.03)).toFixed(2);
//   } else if (amount > 300 && amount <= 500) {
//     result = (amount / (1 - 0.05)).toFixed(2);
//   } else if (amount > 500) {
//     result = (amount / (1 - 0.07)).toFixed(2);
//   }
//   document.getElementById("task_2_normal_result").innerHTML = `<i style="color: green">The amount without discount is ${result} USD</i>`;
// }
// function countNumbers() {
//   let i = 0;
//   let positiveCount = 0;
//   let negativeCount = 0;
//   let zeroCount = 0;
//   let evenCount = 0;
//   let oddCount = 0;
//   while (i < 10) {
//     const number = parseInt(prompt(`Enter number ${i + 1}:`)); //Наприклад, якщо count дорівнює 0, тоді ${count + 1} обчислюється як 1. Отже, у повідомленні підказки відображатиметься «Введіть число 1:». Подібним чином, якщо кількість дорівнює 2, підказка відображатиме «Введіть число 3:» тощо.
//     if (isNaN(number)) {
//       alert("Invalid number. Please try again.");
//       continue;
//     }
//     if (number > 0) {
//       positiveCount++;
//     } else if (number < 0) {
//       negativeCount++;
//     } else {
//       zeroCount++;
//     }
//     if (number % 2 === 0) {
//       evenCount++;
//     } else {
//       oddCount++;
//     }
//     i++;
//   }
//   document.getElementById("task_4_normal_result").innerHTML = `<i style="color: green">Positive numbers: ${positiveCount}; Negative numbers: ${negativeCount}; Zeroes: ${zeroCount}; Even numbers: ${evenCount}; Odd numbers: ${oddCount}</i>`;
// }
// function dayOfWeek() {
//   let dayIndex = 0;
//   do {
//     let day;
//     switch (dayIndex) {
//       case 0:
//         day = "Monday";
//         break;
//       case 1:
//         day = "Tuesday";
//         break;
//       case 2:
//         day = "Wednesday";
//         break;
//       case 3:
//         day = "Thursday";
//         break;
//       case 4:
//         day = "Friday";
//         break;
//       case 5:
//         day = "Saturday";
//         break;
//       case 6:
//         day = "Sunday";
//         break;
//     }
//     const confirmation = confirm(day + ". Do you want to see the next day?");
//     if (!confirmation) {
//       break;
//     }
//     dayIndex = (dayIndex + 1) % 7; //For example, if the current value of dayIndex is 6 (Saturday), the expression dayIndex = (dayIndex + 1) % 7 will evaluate to (6 + 1) % 7, which is 0. So, the value of dayIndex will be updated to 0, representing Sunday.
//   } while (true);
// }