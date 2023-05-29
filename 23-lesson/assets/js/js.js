const getVal = id => document.getElementById(id).valueAsNumber;

function showResult(id, text, mode = 'text') {
  if(mode === 'text') {
    document.getElementById(id).innerText = text;
  } else if (mode === 'html') {
    document.getElementById(id).innerHTML = text;
  }
}
// *******#GENERAL func 
// ===1 Напиши всі можливі варіанти створення функцій.
// Function declaration
function divide(parameters) {
  // Function body
}


// Function expression (Anonymous)
const variable1 = function(parameters) {
  // Function body
};

// Function expression (Named)
const variable2 = function multiply(parameters) {
  // Function body
};
//Arrow function
const variable3 = (parameters) => {
  // Function body
};


// ===2
function countArguments(){
  return arguments.length;
}
function task2(){
  const num = getVal("task_2_num");
  const num1 = getVal("task_2_num1");
  const num2 = getVal("task_2_num2");

  res = countArguments(num, num1, num2);
  showResult("task_2_res", `Arguments quantity is ${res}`, 'text');
}
// console.log(task2(1, 2, 3));   


// =====3
function compareNumbers(n, n1) {
  if(n < n1) {
    return '-1';
  } else if(n > n1){
    showResult("task_3_res", `1`, 'text');
    return `1`;
  } else {
    return `0`;
  }
}

function task3() {
  // debugger;
  const num = getVal("task_3_num");
  const num1 = getVal("task_3_num1");


  if(isNaN(num) && isNaN(num1)) {
    showResult("task_3_res", `Error, enter value`, 'text');
    return false;
  } 

  let res = compareNumbers(num, num1);

  showResult("task_3_res", `${res}`, 'text');
}

// ====4
function factorial(n){
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

function task4() {
const num = getVal("task_4_num");

const res = factorial(num);

showResult("task_4_res", `<i>${res}</i>`, 'html')
}


// =====5
function transformToOneDigit(n, n1, n2) {
  if((n>= 1 && n<=9) && (n1>= 1 && n1<=9) && (n2>= 1 && n2<=9)) {
    n *= 100;
    n1 *= 10;
    let sum = n + n1 + n2;
    return sum;
  } else {
    showResult("task_5_res", `Error, enter correct value from 1 to 9`, 'text');
    return false;
  }
}

function task5() {
  // debugger;
  const num = getVal("task_5_num");
  const num1 = getVal("task_5_num1");
  const num2 = getVal("task_5_num2");


  if(isNaN(num) && isNaN(num1) && isNaN(num2)) {
    showResult("task_5_res", `Error, enter value`, 'text');
    return false;
  } 

  let res = transformToOneDigit(num, num1, num2);

  if(res) {
    showResult("task_5_res", `Your number is ${res}`, 'text');
  } else {
    showResult("task_5_res", `Error, enter correct value from 1 to 9`, 'text');
  }
}
// =======6

function square(w, h) {
  if (isNaN(h)) {
    h = w;
  }
  return w * h;
}

function task6() {
  const width = getVal("task_6_num");
  const height = getVal("task_6_num2");

  res = square(width, height);

  showResult("task_6_res", `Square of shape is <i>${res}</i>`, 'html')
}


// ========7

function findDividorsSum(number) {
  let sum = 1;
  for(let i = 2; i <= number / 2; i++){
    if(number % i === 0) {
      sum += i;
    }
  }
  return sum;
} 
function isPerfect(sumDiv, initNumber){
  if (sumDiv === initNumber) {
   return true;
  } else {
    return false;
  }
}

function task7() {
  // debugger;
  const num = getVal("task_7_num");

  if(isNaN(num)) {
    showResult("task_7_res", `Error, enter value`, 'text');
    return false;
  } else if(num === 1) {
    showResult("task_7_res", `1 is unperfect value`, 'text');
    return false;
  }
  let sum = findDividorsSum(num);
  let res = isPerfect(sum, num);
  if(res) {
    showResult("task_7_res", `Your number is perfect`, 'text');
  } else {
    showResult("task_7_res", `Your number is unperfect`, 'text');
  }
}

// ======8
function findPerfectInRange(){
  const min = getVal("task_8_num");
  const max = getVal("task_8_num2");

  if(isNaN(min) && isNaN(max)) {
    showResult("task_8_res", `Error, enter value`, 'text');
    return false;
  }
  let res = '';
  for (let num = min; num <= max; num++) {
    if (num === 1) {
      continue; // Skip 1, as it is not a perfect number
    }

    const sum = findDividorsSum(num);
    if (isPerfect(sum, num)) {
      res += num + ', ';
    }
  }
  showResult("task_8_res", `Following numbers from the indicated range are perfect: ${res}`, 'text');
}









// FUNC to interact
function task1(){
  const num1 = getVal("task_1_1");
  const num2 = getVal("task_1_2");
  
  const result = compare(num1, num2);

  showResult("task_1_result", `Your res is <b>${result}</b>`, 'html')
  // document.getElementById("task_1_result").innerText = `Your res is <b>${result}</b>`;
}







// function userAge() {
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
