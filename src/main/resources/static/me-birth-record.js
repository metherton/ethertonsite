class MeBirthRecord extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({mode: 'open'});
    this._birth = null;

  }
  connectedCallback() {
    this._root.innerHTML = `
      <style>
        .container {
          display: flex;
        }
      </style>
      <section class="container">
        <section>
          <p id="firstName"></p>
          <p id="surname"></p>
          <p id="placeOfBirth"></p>
          <p id="dateOfBirth"></p>  
        </section>
        <section>
          Map goes here
        </section>
      </section>
    `;
    this._$firstName = this._root.querySelector('#firstName');
    this._$surname = this._root.querySelector('#surname');
    this._$placeOfBirth = this._root.querySelector('#placeOfBirth');
    this._$dateOfBirth = this._root.querySelector('#dateOfBirth');
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
      if (this._$surname) {
        this._$surname.innerHTML = this._birth.surname;
      }
      if (this._$placeOfBirth) {
        this._$placeOfBirth.innerHTML = this._birth.placeOfBirth;
      }
      if (this._$dateOfBirth) {
        this._$dateOfBirth.innerHTML = this._birth.dateOfBirth;
      }
    }
  }

}

window.customElements.define('me-birth-record', MeBirthRecord);
