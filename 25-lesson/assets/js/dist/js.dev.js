"use strict";

var CART = [{
  name: 'Milk',
  qty: 2,
  price: 30.00,
  total: 60.00,
  isBuy: false
}, {
  name: 'Bread',
  qty: 3,
  price: 10.00,
  total: 30.00,
  isBuy: false
}, {
  name: 'Cheese',
  qty: 2,
  price: 30.00,
  total: 60.00,
  isBuy: false
}];

function addToCart() {
  var name = document.getElementById("prod-name").value;
  var qty = document.getElementById("prod-qty").valueAsNumber;
  var price = document.getElementById("prod-price").valueAsNumber; // validation for inputs 

  if (name === '' || isNaN(price) || isNaN(qty)) {
    // alert("Enter product info");
    toast.danger('Enter product info');
    return;
  } // if we did not find el with this name in cart, we add new el to arr, value of name of el is the same as name from input    


  var ind = CART.findIndex(function (el) {
    return el.name === name;
  });

  if (ind !== -1) {
    CART[ind].qty += qty;
    CART[ind].total = CART[ind].qty * CART[ind].price;
    CART[ind].isBuy = false; //зкинути мітку що придбаний
  } else {
    // add el at the end of arr 
    CART.push({
      name: name,
      qty: qty,
      price: price,
      total: qty * price,
      isBuy: false
    });
  }

  ;
  document.getElementById("prod-name").value = '';
  document.getElementById("prod-qty").valueAsNumber = 1;
  document.getElementById("prod-price").value = ''; // alert('Successfully added to cart');

  toast.success('Successfully added to cart'); // console.log(CART);

  viewCartList();
} // Щоб працювало тыльки для тих елементыв якы додані 


function buyProduct($btn) {
  var tr = $btn.closest('tr');
  var index = tr.dataset.index;
  CART[index].isBuy = true;
  tr.children[1].innerHTML = '<span class="badge text-bg-success">Bought</span>';
  tr.children[tr.children.length - 1].innerText = '';
  toast.info('Product is bought'); // viewCartList();
}

function removeProduct($btn) {
  if (confirm('Delete product?')) {
    var index = $btn.closest('tr').dataset.index;
    CART.splice(index, 1);
    $btn.closest('tr').remove();
    toast.success('Product is removed'); // viewCartList();
  }
}

function changeProductQty($btn) {
  var action = $btn.dataset.change;
  var tr = $btn.closest('tr');
  var index = tr.dataset.index;

  if (action === 'plus') {
    CART[index].qty++;
  } else {
    CART[index].qty--;

    if (CART[index].qty === 0) {
      var removeBtn = tr.querySelector('.btn-danger');
      removeProduct(removeBtn);
      return false;
    }
  }

  CART[index].isBuy = false;
  CART[index].total = CART[index].qty * CART[index].price; // viewCartList();

  tr.querySelector('.form-control').value = CART[index].qty;
  tr.querySelector('.total').innerText = CART[index].total.toFixed(2);
} // циклічно пройтись по елементам масиву, зібрати інф та додати в таблицю, просто формуэ циклічно html


function viewCartList() {
  var tBody = '';
  CART.forEach(function (product, index) {
    tBody += cartListRow(product, index);
  });
  document.getElementById("cart_tbody").innerHTML = tBody;
  var totals = calcTotal();
  document.getElementById("cartTotal").innerHTML = totals.totalSum.toFixed(2);
  document.getElementById("bought").innerHTML = totals.bought.toFixed(2);
  document.getElementById("notBought").innerHTML = totals.notBought.toFixed(2);
} // take content of tr and put in separate func. Приймає в себе об тов і повертає цю розмітку. Get one particular tr with all changes. Малювання списку тільки один раз, а потім вже окремо кожен елемент змінювати


function cartListRow(product) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var badge = product.isBuy ? '<span class="badge text-bg-success">Bought</span>' : '<span class="badge text-bg-danger">Not bought</span>';
  return "\n  <tr data-index=\"".concat(index, "\">\n    <td>").concat(product.name, "</td>\n    <td>").concat(badge, "</td>\n    <td>\n      <div class=\"input-group mb-3\">\n        <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeProductQty(this)\" data-change=\"minus\">-</button>\n        <input type=\"number\" class=\"form-control\" placeholder=\"\" aria-label=\"Example text with two button addons\" value=\"").concat(product.qty, "\" readonly>\n        <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeProductQty(this)\" data-change=\"plus\">+</button>\n      </div>\n    </td>\n    <td>").concat(product.price.toFixed(2), "</td>\n    <td class=\"total\">").concat(product.total.toFixed(2), "</td>\n    <td>\n      ").concat(!product.isBuy ? '<button type="button" class="btn btn-warning" onclick="buyProduct(this)">Buy</button>' : '', "\n      ").concat(!product.isBuy ? '<button type="button" class="btn btn-danger" onclick="removeProduct(this)">Delete</button>' : '', "\n    </td>\n  </tr>");
}

viewCartList();

function calcTotal() {
  // return CART.reduce((acc, val) => acc + val.total, 0);
  var bought = 0,
      notBought = 0,
      totalSum = 0;
  CART.forEach(function (product) {
    if (product.isBuy) {
      bought += product.total;
    } else {
      notBought += product.total;
    }
  });
  totalSum = bought + notBought;
  return {
    bought: bought,
    notBought: notBought,
    totalSum: totalSum
  };
} // Додавати кнопку bought тілтки коли isBuy = false 
// independent plugin, not to do changes in html, just to add ready plugin, better than 
// // To add element to html, not to replace
// function toast(text = 'Hello', type = 'info') {
//   if (document.getElementById('my-toast') !== null){
//     document.getElementById('my-toast').remove();
//   }
//   document.body.insertAdjacentHTML('afterbegin', `<div id="my-toast" class="my-toast ${type}">${text}</div>`);
//     // func which will delete element with id my toast 
//   setTimeout(function(){
//     // Щоб одночасно не було 2 тости, потрібно щоб перед тим як додавався новий тост, старий видалявся - треба перевір, чи є вже такий елемент на стор. Якщо такий ел вже э, викликати ф-ю remove
//     if (document.getElementById('my-toast') !== null){
//       document.getElementById('my-toast').remove();
//     }
//   }, 3000);
// }