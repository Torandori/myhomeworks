"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle =
/*#__PURE__*/
function () {
  function Circle(radius, color, left, top) {
    _classCallCheck(this, Circle);

    this._radius = radius;
    this.color = color;
    this.left = left;
    this.top = top;
  }

  _createClass(Circle, [{
    key: "square",
    value: function square() {
      return (Math.PI * Math.pow(this._radius, 2)).toFixed(2);
    }
  }, {
    key: "draw",
    value: function draw() {
      document.body.insertAdjacentHTML('beforeend', "<div style=\"width:".concat(circ1._raius * 2, "px;height:").concat(this.height, "px;background-color:").concat(this.color, ";position:absolute;left:").concat(this.left, "px;top:").concat(this.top, "px;\"></div>"));
    }
  }, {
    key: "radius",
    get: function get() {
      return this._radius;
    }
  }, {
    key: "newRadius",
    set: function set(newRadius) {
      this._radius = newRadius;
    }
  }, {
    key: "diameter",
    get: function get() {
      return this._radius * 2;
    }
  }]);

  return Circle;
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