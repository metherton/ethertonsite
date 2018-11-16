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
          padding: 0.5em;
        }
        
        good-map {
          display: block;
          width: 200px;
          height: 150px;
        }
        .person {
          width: 50%;
          border: 1px solid black;
          padding: 0.5em;
        }
        .map {
          border: 1px solid black;
        }   
      </style>
      <section class="container">
        <section class="person">
          <p id="firstName"></p>
          <p id="surname"></p>
          <p id="placeOfBirth"></p>
          <p id="dateOfBirth"></p>  
        </section>
        <section class="map">
          <good-map api-key="AIzaSyA-XiHqcr56619BrW1PZYzaTFnXVaMT6PY"  
                zoom="12"
               map-options='{"mapTypeId": "roadmap"}'>     
          </good-map>
        </section>
      </section>
    `;
    this._$firstName = this._root.querySelector('#firstName');
    this._$surname = this._root.querySelector('#surname');
    this._$placeOfBirth = this._root.querySelector('#placeOfBirth');
    this._$dateOfBirth = this._root.querySelector('#dateOfBirth');
    this._$goodMap = this._root.querySelector('good-map');
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
      this._$goodMap.setAttribute('latitude', '51.5175');
      this._$goodMap.setAttribute('longitude', '-0.1307');
    }
  }

}

window.customElements.define('me-birth-record', MeBirthRecord);
