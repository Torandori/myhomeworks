
function userAge() {
  const age = document.getElementById("task_1_number").valueAsNumber;

  if(!isNaN(age) && age < 12 && age > 0 && age !== 0 ) {
    document.getElementById("task_1_result").innerHTML = `<i style="color: green">Child</i>`;
  } else if (age >= 12 && age < 18) {
    document.getElementById("task_1_result").innerHTML = `<i style="color: green">Teenager</i>`;
  } else if (age >= 18 && age < 60) {
    document.getElementById("task_1_result").innerHTML = `<i style="color: green">Adult</i>`;
  } else if (age >=60 && age <= 100) {
    document.getElementById("task_1_result").innerHTML = `<i style="color: green">Senior</i>`;
  } else {
    document.getElementById("task_1_result").innerHTML = `<i style="color: red">Enter value from 0 till 100</i>`;
    return ; 
  }
}


// function symbol() {
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

function symbol() {
  const number = document.getElementById("task_2_number").valueAsNumber;

  switch(number) {
    case 0:
      document.getElementById("task_2_result").innerHTML = `<i style="color: green">)</i>`;
    break;
    case 1:
      document.getElementById("task_2_result").innerHTML = `<i style="color: green">!</i>`;
    break;
    case 2:
      document.getElementById("task_2_result").innerHTML = `<i style="color: green">@</i>`;
    break;
    case 3:
      document.getElementById("task_2_result").innerHTML = `<i style="color: green">#</i>`;
    break;
    case 4:
      document.getElementById("task_2_result").innerHTML = `<i style="color: green">$</i>`;
    break;
    case 5:
      document.getElementById("task_2_result").innerHTML = `<i style="color: green">%</i>`;
    break;
    case 6:
      document.getElementById("task_2_result").innerHTML = `<i style="color: green">^</i>`;
    break;
    case 7:
      document.getElementById("task_2_result").innerHTML = `<i style="color: green">&</i>`;
    break;
    case 8:
      document.getElementById("task_2_result").innerHTML = `<i style="color: green">*</i>`;
    break;
    case 9:
      document.getElementById("task_2_result").innerHTML = `<i style="color: green">(</i>`;
    break;
    default:
    document.getElementById("task_2_result").innerHTML = `<i style="color: red">It is not valid value</i>`;
  }
}

function sum() {
  const num = document.getElementById("task_3_number").valueAsNumber;
  const num1 = document.getElementById("task_3_number1").valueAsNumber;

  let result = 0;

  if (isNaN(num)) {
    document.getElementById("task_3_result").innerHTML = `<i style="color: red">Enter value</i>`;
    return false;
  }

  for(let i=num;i<=num1;i++) {
    result += i;
  }
  document.getElementById("task_3_result").innerHTML = `<i style="color: red">${result}</i>`;
}

function commonDivisor() {
  const num = document.getElementById("task_4_number").valueAsNumber;
  const num1 = document.getElementById("task_4_number1").valueAsNumber;

  let result = 0;

  if (isNaN(num)) {
    document.getElementById("task_4_result").innerHTML = `<i style="color: red">Enter a value</i>`;
    return false;
  }

  for(let i = 1; i <= num && i <= num1; i++){
    if(num % i === 0 && num1 % i === 0) {
      result = i;
    }
  }
  document.getElementById("task_4_result").innerHTML = `<i style="color: red">${result}</i>`;
}


function countDivisor() {
  const num = document.getElementById("task_5_number").valueAsNumber;
  let result = '';

  if (isNaN(num)) {
    document.getElementById("task_5_result").innerHTML = `<i style="color: red">Enter value</i>`;
    return false;
  }

  for(let i=1;i<=num / 2;i++) {
    if(num % i === 0){
      result += i + ', ';
    }
  }
  result += num; 
  document.getElementById("task_5_result").innerHTML = `<i style="color: red">${result}</i>`;
}



function palindrome() {
  const num = document.getElementById("task_1_normal_number").valueAsNumber;
  let result = '';

  if (isNaN(num)) {
    document.getElementById("task_1_normal_result").innerHTML = `<i style="color: red">Enter five-digit value</i>`;
    return false;
  }

  if(Math.trunc(num / 10000) === num % 10 && Math.trunc((num / 1000) % 10) === Math.trunc((num % 100) / 10)) {
    document.getElementById("task_1_normal_result").innerHTML = `<i style="color: green">The digit is palindrome</i>`;
  } else {
    document.getElementById("task_1_normal_result").innerHTML = `<i style="color: red">The digit is NOT palindrome</i>`;
  }
}


function beforeDiscount() {
  const amount = document.getElementById("task_2_normal_number").valueAsNumber;
  let result = '';

  if (isNaN(amount)) {
    document.getElementById("task_2_normal_result").innerHTML = `<i style="color: red">Enter a value</i>`;
    return false;
  }

  if (amount >= 200 && amount <= 300) {
    result = (amount / (1 - 0.03)).toFixed(2);
  } else if (amount > 300 && amount <= 500) {
    result = (amount / (1 - 0.05)).toFixed(2);
  } else if (amount > 500) {
    result = (amount / (1 - 0.07)).toFixed(2);
  }
  document.getElementById("task_2_normal_result").innerHTML = `<i style="color: green">The amount without discount is ${result} USD</i>`;
}


function countNumbers() {
  let i = 0;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  let evenCount = 0;
  let oddCount = 0;

  while (i < 10) {
    const number = parseInt(prompt(`Enter number ${i + 1}:`)); //Наприклад, якщо count дорівнює 0, тоді ${count + 1} обчислюється як 1. Отже, у повідомленні підказки відображатиметься «Введіть число 1:». Подібним чином, якщо кількість дорівнює 2, підказка відображатиме «Введіть число 3:» тощо.
    
    if (isNaN(number)) {
      alert("Invalid number. Please try again.");
      continue;
    }
    
    if (number > 0) {
      positiveCount++;
    } else if (number < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }

    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }

    i++;
  }

  document.getElementById("task_4_normal_result").innerHTML = `<i style="color: green">Positive numbers: ${positiveCount}; Negative numbers: ${negativeCount}; Zeroes: ${zeroCount}; Even numbers: ${evenCount}; Odd numbers: ${oddCount}</i>`;
}


function dayOfWeek() {
  let dayIndex = 0;

  do {
    let day;
    switch (dayIndex) {
      case 0:
        day = "Monday";
        break;
      case 1:
        day = "Tuesday";
        break;
      case 2:
        day = "Wednesday";
        break;
      case 3:
        day = "Thursday";
        break;
      case 4:
        day = "Friday";
        break;
      case 5:
        day = "Saturday";
        break;
      case 6:
        day = "Sunday";
        break;
    }

    const confirmation = confirm(day + ". Do you want to see the next day?");
    if (!confirmation) {
      break;
    }
    
    dayIndex = (dayIndex + 1) % 7; //For example, if the current value of dayIndex is 6 (Saturday), the expression dayIndex = (dayIndex + 1) % 7 will evaluate to (6 + 1) % 7, which is 0. So, the value of dayIndex will be updated to 0, representing Sunday.
  } while (true);
}

//////
function findNumber() {
  let from = 0;
  let to = 100;
  let middle = 0;
  let answer = '';
  let steps = 0;

  do {
    steps++;
    middle = Math.round((from + to) / 2);
    // document.getElementById("text").innerHTML = `<p>Bigger, smaller or equal ${middle}</p>`;
    // answer = document.getElementById("task_1_extra").value;
    
    answer = prompt(`Bigger, smaller or equal ${middle}`);
    if(answer === '>'){
      from = middle;
    }
    if(answer === '<') {
      to = middle;
    }
  } while (answer !== '=')
  document.getElementById("task_1_extra_result").innerHTML = `<i">Your number is: ${middle}, steps: ${steps}</i>`;
}




function multipleTable() {
  // const num = document.getElementById("task_4_number").valueAsNumber;
  // const num1 = document.getElementById("task_4_number1").valueAsNumber;

  for (let number = 2; number <= 9; number++) {
    console.log(`Multiplication table for ${number}:`);
    for (let multiplier = 1; multiplier <= 10; multiplier++) {
      let result = number * multiplier;
      console.log(`${number} x ${multiplier} = ${result}`);
    }
    console.log(''); 
  }
  document.getElementById("task_2_extra_result").innerHTML = `<i style="color: red">Multiplication table for ${number}: ${result}</i>`;
}



function nextDate() {
  let day = parseInt(prompt('Enter day'));
  let mon = parseInt(prompt('Enter mon'));
  let year = parseInt(prompt('Enter year'));
  // let day = getElementById("task_3_extra").valueAsNumber;
  // let mon = getElementById("task_3_ext").valueAsNumber;
  // let year = getElementByIdt("task_3_ex:").valueAsNumber;
  let newDay = +day + 1;
  let newMon = mon;
  let newYear = year;
  
  // 10.02.2019 => 11.02.2019
  // 31.12.2019 => 01.01.2020
  // 28.02.2019 => 29.02.2020
  // 28.02.2021 => 01.03.2021
  // 31 => 1, 3, 5, 7, 8, 10, 12
  switch (mon) {
    case 1: 
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (newDay == 32) {
        newDay = 1;
        newMon++;
      };
      break;
    case 4:
    case 6:
    case 9:
    case 11:
    if (newDay == 31) {
      newDay = 1;
      newMon++;
    };
    break;
    case 2:
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 !== 0)) {
        if (newDay == 30) {
          newDay = 1;
          newMon++
        }
      } else {
        if (newDay == 29) {
          newDay = 1;
          newMon++;
        }
      };
      break;
  }
  if (newMon == 13) {
    newMon = 1;
    newYear++;
  }
  const addZero = num => num < 10 ? '0' + num : '' + num;
  
  document.getElementById("task_3_extra_result").innerHTML = `<i>next date: ${addZero(newDay)}/${addZero(newMon)}/${newYear}</i>`;
}

