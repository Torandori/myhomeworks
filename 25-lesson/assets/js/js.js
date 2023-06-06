let CART = [
  {
    name: 'Milk',
    qty: 2,
    price: 30.00,
    total: 60.00,
    isBuy: false,
  }
];

function addToCart() {
  const name = document.getElementById("prod-name").value;
  const qty = document.getElementById("prod-qty").valueAsNumber;
  const price = document.getElementById("prod-price").valueAsNumber;
  
  // validation for inputs 
  if(name === '' || isNaN(price) || isNaN(qty))  {
    // alert("Enter product info");
    toast.danger('Enter product info');
    return ;
  }

  // if we did not find el with this name in cart, we add new el to arr, value of name of el is the same as name from input    
  const ind = CART.findIndex(el => el.name === name);
  if(ind !== -1){
    CART[ind].qty += qty;
    CART[ind].total = CART[ind].qty * CART[ind].price;
    CART[ind].isBuy = false; //зкинути мітку що придбаний
  } else {
    // add el at the end of arr 
    CART.push({
      name,
      qty,
      price,
      total: qty * price,
      isBuy: false
    });
  };

  document.getElementById("prod-name").value = '';
  document.getElementById("prod-qty").valueAsNumber = 1;
  document.getElementById("prod-price").value = '';

  // alert('Successfully added to cart');
  toast.success('Successfully added to cart');

  // console.log(CART);
  viewCartList();
}

// Щоб працювало тыльки для тих елементыв якы додані 
function buyProduct(index1) {
  CART[index1].isBuy = true;
  toast.info('Product is bought');
  viewCartList();
}

function removeProduct(index) {
  if (confirm('Delete product?')) {
    CART.splice(index, 1);
    toast.info('Product is removed');
    viewCartList();
  }
}
function changeProductQty(index, operator){
  if(operator === 'plus') {
    CART[index].qty++;
  } else {
    CART[index].qty--;
    if(CART[index].qty === 0) {
      removeProduct(index);
      return ;
    }
  }
  CART[index].isBuy = false;
  CART[index].total = CART[index].qty * CART[index].price;

  viewCartList();
}
// циклічно пройтись по елементам масиву, зібрати інф та додати в таблицю, просто формуэ циклічно html
function viewCartList(){
  let tBody = '';
  
  CART.forEach(function(product, index){
    let badge = product.isBuy ? '<span class="badge text-bg-success">Bought</span>' : '<span class="badge text-bg-danger">Not bought</span>';
    tBody += `
    <tr>
      <td>${product.name}</td>
      <td>${badge}</td>
      <td>
        <div class="input-group mb-3">
          <button class="btn btn-outline-secondary" type="button" onclick="changeProductQty(${index}, 'minus')">-</button>
          <input type="number" class="form-control" placeholder="" aria-label="Example text with two button addons" value="${product.qty}" readonly>
          <button class="btn btn-outline-secondary" type="button" onclick="changeProductQty(${index}, 'plus')">+</button>
        </div>
      </td>
      <td>${product.price.toFixed(2)}</td>
      <td>${product.total.toFixed(2)}</td>
      <td>
        ${!product.isBuy ? '<button type="button" class="btn btn-warning" onclick="buyProduct(' + index + ')">Buy</button>' : ''}
        ${!product.isBuy ? '<button type="button" class="btn btn-danger" onclick="removeProduct(' + index + ')">Delete</button>' : ''}
      </td>
    </tr>`
  });
  document.getElementById("cart_tbody").innerHTML = tBody;
} 
viewCartList();
// Додавати кнопку bought тілтки коли isBuy = false 

// independent plugin, not to do chenges in html, just to add ready plugin, better than 
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


