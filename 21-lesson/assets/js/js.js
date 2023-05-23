
function sumNumbers() {
  const num1 = 0.1;
  const num2 = 0.2;

  let res = (num1 + num2).toFixed(1);
  document.getElementById("task_1_result").innerText = res;
}

function sumStringNumber() {
  const string = +("1");
  const num = 2;

  let res = (string + num);
  document.getElementById("task_2_result").innerText = res;
}

function flashFileQuantity() {
  const gb = document.getElementById("task_3_number").valueAsNumber;

  if(isNaN(gb)) {
    document.getElementById("task_3_result").innerHTML = `<i style="color: red">Enter valid value</i>`;
    return ; 
    }

  let res = Math.floor((gb * 1024) / 820);
  document.getElementById("task_3_result").innerText = res 
}

function chocolade() {
  const money = document.getElementById("task_4_number").valueAsNumber;
  const choco_price = document.getElementById("task_4_number1").valueAsNumber;

  if(isNaN(money)) {
    document.getElementById("task_4_result").innerHTML = `<i style="color: red">Enter valid value</i>`;
    document.getElementById("task_4_result1").innerHTML = `<i style="color: red">Enter valid value</i>`;
    return ; 
    }
  if(isNaN(choco_price)) {
    document.getElementById("task_4_result").innerHTML = `<i style="color: red">Enter valid value</i>`;
    document.getElementById("task_4_result1").innerHTML = `<i style="color: red">Enter valid value</i>`;
    return ; 
    }

  let res = Math.trunc(money / choco_price);
  let res1 = money - (res * choco_price);
  document.getElementById("task_4_result").innerText = res;
  document.getElementById("task_4_result1").innerText = res1;
}

function revert() {
  debugger;
  const number = document.getElementById("task_5_number").valueAsNumber;

  if (isNaN(number)) {
    document.getElementById("task_5_result").innerHTML = `<i style="color: red">Enter valid value</i>`;
    return ;
  } else if (number >= 100 && number <= 999) {
    let res = ((number % 10) * 100) + (((Math.trunc(number / 10)) % 10) * 10) + (Math.trunc(number / 100));
    document.getElementById("task_5_result").innerText = res;
  }
}

function percentAmount() {
  debugger;
  const number = document.getElementById("task_6_number").valueAsNumber;

  if (isNaN(number)) {
    document.getElementById("task_6_result").innerHTML = `<i style="color: red">Enter valid value</i>`;
    return ;
  }
  let res = (((number * 0.05) / 12) * 2).toFixed(2);
  document.getElementById("task_6_result").innerText = res;
}
// 2 && 0 && 3 // false

// 2 || 0 || 3 // true

// 2 && 0 || 3 // true