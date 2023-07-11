"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(name, role) {
    _classCallCheck(this, User);

    this.name = name;
    this.role = role;
  }

  _createClass(User, [{
    key: "name",
    get: function get() {
      return this.name;
    }
  }, {
    key: "role",
    get: function get() {
      return this.role;
    }
  }], [{
    key: "validate",
    value: function validate(name, role) {
      var isValid = true,
          error = [];

      if (name === '') {
        isValid = false;
        error.push('Enter username.');
      }

      if (role === '') {
        isValid = false;
        error.push('Please choose the role.');
      } else {
        if (!['user', 'admin'].includes(role)) {
          isValid = false;
          error.push('Invalid role value.');
        }
      }

      return {
        isValid: isValid,
        error: error.join(' ')
      };
    }
  }]);

  return User;
}();

exports["default"] = User;