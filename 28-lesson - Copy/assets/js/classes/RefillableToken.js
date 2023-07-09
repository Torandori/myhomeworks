import Marker from './Marker.js';
export default class RefillableToken extends Marker {
  constructor(color, inkLevel){
    super(color, inkLevel);
  }
  refill() {
    if(this.inkLevel !== 0) {
    window.coloredText.insertAdjacentHTML('beforeend', `<p style="font-size: 14px">Marker is not empty yet.</p>`);
    return false;
    }
    this.inkLevel = 100;
    console.log('Marker has been refilled.');
    window.coloredText.insertAdjacentHTML('beforeend', `<p style="font-size: 14px">Marker is refilled.</p>`);
  }
}