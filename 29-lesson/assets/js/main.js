import User from "./classes/User.js";
//  const user = new User('Petro', 'user');
//  const user = new User('', 'useartj');
// console.log(user);

const USERS = [];

window.addUser.addEventListener('click', function(){
  const name = window.username.value,
        role = window.role.value;
  const validResp = User.validate(name, role);
  if(!validResp.isValid){
    alert(validResp.error);
    return false;
  }
  // todo: create new user
  const user = new User(name, role);
  USERS.push(user);

  window.username.value = '';
  window.role.value = '';
  alert('User successfully created. Your password: ' + user.password);
  console.log(USERS);
})

window.signIn.addEventListener('click', function(){
  const login = window.login.value,
        password = window.password.value;
  if(login !== '' && password !== ''){
    const isLogin = User.login(login, password, USERS);
    if(isLogin !== 'Success'){
      alert(isLogin);
      return;
    }
    window.loginCard.remove();
    document.body.append(logoutBtn);
  }
})

const logoutBtn = document.createElement('button');
logoutBtn.setAttribute('type', 'button');
logoutBtn.innerText = 'Logout';
logoutBtn.classList.add('btn');
logoutBtn.classList.add('btn-warning');
logoutBtn.onclick = function(){User.logout()};


