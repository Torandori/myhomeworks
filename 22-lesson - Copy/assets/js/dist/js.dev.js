"use strict";

var compare = function compare(a, b) {
  return a < b ? a : b;
};

function getVal(id) {}

function task1() {
  var num1 = document.getElementById('task_1_1').valueAsNumber;
  var num2 = document.getElementById('task_1_2').valueAsNumber;
  var result = compare(num1, num2);
  document.getElementById('task_1_result').innerText = "Smaller num is ".concat(result);
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