"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toast = void 0;
// not to use this toast('Successfully added to cart', 'success') but better use toast.success( `text of mes`) - need to make object with different methods - info, success, warning, danger:
var toast = {
  styles: {
    position: 'fixed',
    'max-width': '500px',
    top: '100px',
    left: '20px',
    'border-radius': '10px',
    padding: '10px 20px',
    color: '#fff',
    'background-color': '#999',
    'z-index': '2000'
  },
  show: function show(text, type) {
    var _this = this;

    this.hide(); // create row from object from styles. Assign to variable. 

    var style = '';

    for (var prop in this.styles) {
      style += "".concat(prop, ":").concat(this.styles[prop], ";"); //add this row in atribute style in tag div
    }

    if (type === 'info') {
      style += 'background-color: rgba(9, 202, 240, 0.9)';
    } else if (type === 'success') {
      style += 'background-color: rgba(60, 163, 168, 0.8)';
    } else if (type === 'danger') {
      style += 'background-color: rgba(220, 53, 69, 0.9)';
    } else if (type === 'warning') {
      style += 'background-color: rgba(255, 193, 7, 0.9)';
    }

    ;
    document.body.insertAdjacentHTML('afterbegin', "<div id=\"my-toast\" style=\"".concat(style, "\">").concat(text, "</div>")); // func which will delete element with id my toast 
    // to fix error that 'this' inside setTimeout has context of setTimeout not an Obj - to declare gloval variable fro setTimeout. Or seecond way to fix - transform to arrow func, this func doesnot have own context of execution, it will take parent context of execution. 

    setTimeout(function () {
      // Щоб одночасно не було 2 тости, потрібно щоб перед тим як додавався новий тост, старий видалявся - треба перевір, чи є вже такий елемент на стор. Якщо такий ел вже э, викликати ф-ю remove
      _this.hide();
    }, 3000); // const _this = this;
    //   setTimeout(function(){
    //   _this.hide();
    // }, 3000);
  },
  hide: function hide() {
    if (document.getElementById('my-toast') !== null) {
      document.getElementById('my-toast').remove();
    }
  },
  success: function success(text) {
    this.show(text, 'success');
  },
  warning: function warning(text) {
    this.show(text, 'warning');
  },
  info: function info(text) {
    this.show(text, 'info');
  },
  danger: function danger(text) {
    this.show(text, 'danger');
  },
  error: function error(text) {
    this.danger(text);
  }
};
exports.toast = toast;