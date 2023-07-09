export default class Marker {
  constructor(color, inkLevel){
    this._color = color;
    this.inkLevel = inkLevel;
    this._text = '';
  }
  set color(newColor) {
    this._color = newColor;
  } 
  set text(newText) {
    this._text = newText;
  } 


  write() {
    const element = document.getElementById('coloredText');
    for (let i = 0; i < this._text.length; i++) {
      const char = this._text[i]; 
      if (char !== ' ') {
        if (this.inkLevel > 0) {
          const charElement = document.createElement('span');
          charElement.innerText = char;
          charElement.style.color = this._color;
          element.append(charElement);
          this.inkLevel -= 0.5;
          }  else if (this.inkLevel <= 0){
            window.coloredText.insertAdjacentHTML('beforeend', `<p style="font-size: 14px">Marker is out of ink.</p>`);
            break;
        } 
      } else {
        const spaceElement = document.createTextNode(' ');
        element.appendChild(spaceElement);
      }
    }
  }
}