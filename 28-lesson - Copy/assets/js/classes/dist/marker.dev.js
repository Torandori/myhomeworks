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

    this.color = color;
    this.inkLevel = inkLevel;
  }

  _createClass(Marker, [{
    key: "write",
    value: function write(text) {
      var element = document.getElementById('coloredText');
      var charElement = document.createElement('span');
      charElement.style.color = this.color;

      if (this.inkLevel === 0) {
        window.coloredText.insertAdjacentHTML('beforeend', "<p style=\"font-size: 14px\">Marker is out of ink.</p>");
        return false;
      }

      for (var i = 0; i < text.length; i++) {
        var _char = text[i];

        if (_char !== ' ') {
          this.inkLevel -= 0.5;
        }

        if (this.inkLevel === 0) {
          window.coloredText.insertAdjacentHTML('beforeend', "<p style=\"font-size: 14px\">Marker is out of ink.</p>");
          break;
        }

        charElement.innerText += _char;
      }

      element.append(charElement);
      console.log(this.inklevel);
    }
  }]);

  return Marker;
}();

exports["default"] = Marker;