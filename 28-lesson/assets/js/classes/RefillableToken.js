import Marker from './Marker.js';
export default class RefillableToken extends Marker {
  refill() {
    this.inkLevel = 100;
    console.log('Marker has been refilled.');
    window.coloredText.insertAdjacentHTML('beforeend', `<p style="font-size: 14px">Marker is refilled.</p>`);
  }
  // removeBtnWrite(){
  //   document.getElementById('applyColorText').remove();
  // }
  // addBtnContinue(){
  //   const btnContinue = document.createElement('button');
  //   btnContinue.setAttribute('type', 'button');
  //   btnContinue.innerText = 'Continue';
  //   btnContinue.setAttribute('id', 'continue');
  //   let btnRefill = document.getElementById('refillMarker');
  //   btnRefill.insertAdjacentElement('beforebegin', btnContinue);
  //   document.getElementById('continue').onclick = this.write();
  // }
}