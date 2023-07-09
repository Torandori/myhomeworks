"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rectangle =
/*#__PURE__*/
function () {
  function Rectangle(radius, color, left, top) {
    _classCallCheck(this, Rectangle);

    this._radius = radius;
    this.color = color;
    this.left = left;
    this.top = top;
    this.id = this.genId();
  }

  _createClass(Rectangle, [{
    key: "square",
    value: function square() {
      return (Math.PI * Math.pow(this._radius, 2)).toFixed(2);
    }
  }, {
    key: "circuit",
    value: function circuit() {
      return (2 * Math.PI * this._radius).toFixed(2);
    }
  }, {
    key: "genId",
    value: function genId() {
      var min = 1000;
      var max = 9999;
      return 'cir_' + Math.floor(Math.random() * (max - min + 1) + min);
    }
  }, {
    key: "draw",
    value: function draw() {
      if (document.getElementById(this.id)) {
        document.getElementById(this.id).remove();
      }

      document.body.insertAdjacentHTML('beforeend', "<div id=\"".concat(this.id, "\" style=\"width:").concat(this._radius * 2, "px;height:").concat(this._radius * 2, "px;background-color:").concat(this.color, ";position:absolute;left:").concat(this.left, "px;top:").concat(this.top, "px;border-radius: 50%\"></div>"));
    }
  }, {
    key: "radius",
    get: function get() {
      return this._radius;
    },
    set: function set(newRadius) {
      this._radius = newRadius;
    }
  }, {
    key: "diameter",
    get: function get() {
      return this._radius * 2;
    }
  }]);

  return Rectangle;
}(); // class Rect{
//   constructor(width, height, color, left, top){
//     this.width = width;
//     this.height = height;
//     this._color = color;
//     this.left = left;
//     this.top = top;
//   }
//   draw(){
//     document.body.insertAdjacentHTML('beforeend', `<div style="width:${this.width}px;height:${this.height}px;background-color:${this._color};position:absolute;left:${this.left}px;top:${this.top}px;"></div>`)
//   }
//   get square(){
//     return this.width * this.height;
//   }
//   get color(){
//     return this._color;
//   }
//   set color(newColor) {
//     this._color = newColor;
//   }
// }


exports["default"] = Rectangle;