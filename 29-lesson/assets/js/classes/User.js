export default class User {
  constructor(name, role){
    this._name = name;
    this._role = role;
    this._password = this.#generatePassword();
  }
  static validate(name, role){
    let isValid = true,
      error = [];
    if(name === ''){
      isValid = false;
      error.push('Enter username.');
    }
    if(role === ''){
      isValid = false;
      error.push('Please choose the role.');
    } else {
      if(!['user', 'admin'].includes(role)){
        isValid = false;
        error.push('Invalid role value.');
      }
    }
    return {
      isValid,
      error:error.join(' ')
    }
  }

  get name(){
    return this._name;
  }
  get role(){
    return this._role;
  }
  get password(){
    return this._password;
  }

  #generatePassword(){
    const length = 10;
    const chars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'c', 'z', 'x', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '!', '@', '#', '$', '%', '&', '*', '(', ')', '_'];
    let password = '';
    for(let i=0;i<length;i++){
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
  }

  static login(username, password, users){
    const isUser = users.find((el) => el._name === username);
    // if(isUser !== undefined){
    //   if(isUser._password === password){
    //     localStorage.setItem('userdata', JSON.stringify(isUser))
    //   } else {
    //     return 'Invalid password';
    //   } 
    // } else {
    //   return 'Invalid username';
    // }
    if(isUser === undefined){
      return 'Invalid username';
    }
    if(isUser._password !== password){
      return 'Invalid password';
    }
    localStorage.setItem('userdata', JSON.stringify(isUser))
    // console.log(USERS);
    return 'Success';
  }
  static logout(){
    localStorage.removeItem('userdata');
  }
}
