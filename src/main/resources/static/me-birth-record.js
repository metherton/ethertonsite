class MeBirthRecord extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({mode: 'open'});
    this._birth = null;

  }
  connectedCallback() {

    this._root.innerHTML = `
      <style>
        p {
          color: green;
        }
      </style>
      <p id="firstName"></p>
    `;

    this._$firstName = this._root.querySelector('p');


  }

  // use setters and getters to create an API for the component
  set birth(data) {
    if (this._birth === data) return;
    this._birth = data;
    this._render();
  }

  get birth() {
    return this._birth;
  }

  _render() {
    if (this._birth) {
      if (this._$firstName) {
        this._$firstName.innerHTML = this._birth.firstName;
      }
    }
  }

}

window.customElements.define('me-birth-record', MeBirthRecord);
