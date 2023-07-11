"use strict";

var _User = _interopRequireDefault(require("./classes/User.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//  const user = new User('Petro', 'user');
//  const user = new User('', 'useartj');
// console.log(user);
var USERS = [];
window.addUser.addEventListener('click', function () {
  var name = window.username.value,
      role = window.role.value;

  var validResp = _User["default"].validate(name, role);

  if (!validResp.isValid) {
    alert(validResp.error);
    return false;
  } // todo: create new user


  var user = new _User["default"](name, role);
  USERS.push(user);
  window.username.value = '';
  window.role.value = '';
  alert('User successfully created. Your password: ' + user.password);
  console.log(USERS);
});
window.signIn.addEventListener('click', function () {
  var login = window.login.value,
      password = window.password.value;

  if (login !== '' && password !== '') {
    var isLogin = _User["default"].login(login, password, USERS);

    if (isLogin !== 'Success') {
      alert(isLogin);
      return;
    }

    window.loginCard.remove();
    document.body.append(logoutBtn);
  }
});
var logoutBtn = document.createElement('button');
logoutBtn.setAttribute('type', 'button');
logoutBtn.innerText = 'Logout';
logoutBtn.classList.add('btn');
logoutBtn.classList.add('btn-warning');

logoutBtn.onclick = function () {
  _User["default"].logout();
};