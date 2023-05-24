"use strict";

function sumNumbers() {
  var num1 = 0.1;
  var num2 = 0.2;
  var res = (num1 + num2).toFixed(1);
  document.getElementById("task_1_result").innerText = res;
}

function sumStringNumber() {
  var string = +"1";
  var num = 2;
  var res = string + num;
  document.getElementById("task_2_result").innerText = res;
}

function flashFileQuantity() {
  var gb = document.getElementById("task_3_number").valueAsNumber;

  if (isNaN(gb)) {
    document.getElementById("task_3_result").innerHTML = "<i style=\"color: red\">Enter valid value</i>";
    return;
  }

  var res = Math.floor(gb * 1024 / 820);
  document.getElementById("task_3_result").innerText = "".concat(res, " files");
}

function chocolade() {
  var money = document.getElementById("task_4_number").valueAsNumber;
  var choco_price = document.getElementById("task_4_number1").valueAsNumber;

  if (isNaN(money)) {
    document.getElementById("task_4_result").innerHTML = "<i style=\"color: red\">Enter valid value</i>";
    document.getElementById("task_4_result1").innerHTML = "<i style=\"color: red\">Enter valid value</i>";
    return;
  }

  if (isNaN(choco_price)) {
    document.getElementById("task_4_result").innerHTML = "<i style=\"color: red\">Enter valid value</i>";
    document.getElementById("task_4_result1").innerHTML = "<i style=\"color: red\">Enter valid value</i>";
    return;
  }

  var res = Math.trunc(money / choco_price);
  var res1 = money - res * choco_price;
  document.getElementById("task_4_result").innerText = "You will be able to by ".concat(res, " chocolates. The rest of the money will be ").concat(res1, " USD.");
}

function revert() {
  debugger;
  var number = document.getElementById("task_5_number").valueAsNumber;

  if (isNaN(number)) {
    document.getElementById("task_5_result").innerHTML = "<i style=\"color: red\">Enter valid value</i>";
    return;
  } else if (number >= 100 && number <= 999) {
    var res = number % 10 * 100 + Math.trunc(number / 10) % 10 * 10 + Math.trunc(number / 100);
    document.getElementById("task_5_result").innerText = res;
  }
}

function percentAmount() {
  debugger;
  var number = document.getElementById("task_6_number").valueAsNumber;

  if (isNaN(number)) {
    document.getElementById("task_6_result").innerHTML = "<i style=\"color: red\">Enter valid value</i>";
    return;
  }

  var res = (number * 0.05 / 12 * 2).toFixed(2);
  document.getElementById("task_6_result").innerText = res;
} // 2 && 0 && 3 // false
// 2 || 0 || 3 // true
// 2 && 0 || 3 // true