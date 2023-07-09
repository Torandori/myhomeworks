"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, inkLevel) {
    _classCallCheck(this, Marker);

    this._color = color;
    this.inkLevel = inkLevel;
    this._text = '';
  }

  _createClass(Marker, [{
    key: "write",
    value: function write() {
      var element = document.getElementById('coloredText');

      for (var i = 0; i < this._text.length; i++) {
        var _char = this._text[i];

        if (_char !== ' ') {
          if (this.inkLevel > 0) {
            var charElement = document.createElement('span');
            charElement.innerText = _char;
            charElement.style.color = this._color;
            element.append(charElement);
            this.inkLevel -= 0.5;
          } else if (this.inkLevel <= 0) {
            window.coloredText.insertAdjacentHTML('beforeend', "<p style=\"font-size: 14px\">Marker is out of ink.</p>");
            break;
          }
        } else {
          var spaceElement = document.createTextNode(' ');
          element.appendChild(spaceElement);
        }
      }
    }
  }, {
    key: "color",
    set: function set(newColor) {
      this._color = newColor;
    }
  }, {
    key: "text",
    set: function set(newText) {
      this._text = newText;
    }
  }]);

  return Marker;
}();

exports["default"] = Marker;