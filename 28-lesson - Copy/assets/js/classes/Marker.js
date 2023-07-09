export default class Marker {
  constructor(color, inkLevel){
    this.color = color;
    this.inkLevel = inkLevel;
  }


  write(text) {
    const element = document.getElementById('coloredText');
    const charElement = document.createElement('span');
          charElement.style.color = this.color;
    
    if(this.inkLevel === 0){
      window.coloredText.insertAdjacentHTML('beforeend', `<p style="font-size: 14px">Marker is out of ink.</p>`);
      return false;
    }

    for (let i = 0; i < text.length; i++) {
      const char = text[i]; 
      if (char !== ' ') {
        this.inkLevel -= 0.5;
      }
      if (this.inkLevel === 0) {
        window.coloredText.insertAdjacentHTML('beforeend', `<p style="font-size: 14px">Marker is out of ink.</p>`);
        break;
      }
      charElement.innerText += char;
    }
    element.append(charElement);
    console.log(this.inklevel);
  }
}