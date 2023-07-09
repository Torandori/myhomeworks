"use strict";

var _Circle = _interopRequireDefault(require("./classes/Circle.js"));

var _Marker = _interopRequireDefault(require("./classes/Marker.js"));

var _RefillableToken = _interopRequireDefault(require("./classes/RefillableToken.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var circ1 = new _Circle["default"](50, 'red', 150, 150);
circ1.info();
circ1.draw();
window.applyRadius.addEventListener('click', function () {
  circ1.radius = document.getElementById('newRadius').valueAsNumber;
  circ1.info();
  circ1.draw();
});
var circ2 = new _Circle["default"](100, 'yellow', 250, 150);
circ2.draw();
var marker1 = new _Marker["default"]('blue', 5);
window.applyColorText.addEventListener('click', function () {
  marker1.color = document.getElementById('enteredColor').value;
  marker1.text = document.getElementById('enteredText').value;
  marker1.write();
  document.getElementById('enteredText').value = '';
});
var refillableMarker = new _RefillableToken["default"]('red', 5);
window.refillMarker.addEventListener('click', function () {
  refillableMarker.refill();
  console.log(refillableMarker.inkLevel);
  document.getElementById('enteredText').value = ''; // refillableMarker.removeBtnWrite();
  // refillableMarker.addBtnContinue();
}); // refillableMarker.write(' consectetur adipiscing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error alias soluta, ipsam laudantium facilis explicabo magni id quibusdam minus excepturi non. Nostrum laborum, quasi nulla cumque, recusandae, nesciunt magni labore iusto asperiores molestias facere? Eius veritatis quibusdam praesentium, eos iste possimus ipsam, nihil consequatur sint distinctio, non repellat dolore deleniti facilis. Illo dolorum, magnam nam nisi quidem velit delectus et necessitatibus atque. Maxime porro id commodi, unde repellendus quaerat totam dolor eius itaque mollitia quibusdam debitis qui tempora? Sequi aut minus earum magni nihil excepturi at culpa distinctio, in sapiente similique corrupti laudantium nesciunt sit mollitia ad rem voluptatibus numquam!');
// refillableMarker.refill();
// refillableMarker.write('Lorem ipsum dolor sit amet');