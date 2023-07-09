export default class Circle {
  constructor(radius, color, left, top){
    this._radius = radius;
    this.color = color;
    this.left = left;
    this.top = top;
    this.id = this.#genId();
  }

  get radius(){
    return this._radius;
  }
  set radius(newRadius) {
    this._radius = newRadius;
  }
  get diameter(){
    return this._radius * 2;
  }
  square(){
    return (Math.PI * Math.pow(this._radius, 2)).toFixed(2);
  }
  circuit(){
    return (2 * Math.PI * (this._radius)).toFixed(2);
  }

  #genId() {
    const min = 1000;
    const max = 9999;
    return 'cir_' + Math.floor(Math.random() * (max - min + 1) + min);
  }

  info() {
    document.getElementById('getRadius').innerHTML = `<b>Radius of circle is:</b> ${this.radius}px`;
    document.getElementById('diam').innerHTML = `<b>Diameter of circle is:</b> ${this.diameter}px`;
    document.getElementById('square').innerHTML = `<b>Square of circle is:</b> ${this.square()}px^2`;
    document.getElementById('circumference').innerHTML = `<b>Circumference of circle is:</b> ${this.circuit()}px`;
  }

  draw(){
    if(document.getElementById(this.id)){
      document.getElementById(this.id).remove();
    }
    document.body.insertAdjacentHTML('beforeend', `<div id="${this.id}" style="width:${this._radius * 2}px;height:${this._radius * 2}px;background-color:${this.color};position:absolute;left:${this.left}px;top:${this.top}px;border-radius: 50%"></div>`)
  }
}
