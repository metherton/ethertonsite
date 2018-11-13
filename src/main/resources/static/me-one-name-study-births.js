
class MeOneNameStudyBirths extends HTMLElement {

  constructor() {
    super();
    this._root = this.attachShadow({"mode": "open"});
    this._$persons = null;
  }

  connectedCallback() {
    this._root.innerHTML = `
      <style>
        p {
          color: red;
        }
      </style>
      <p>Me One Name Study Births</p>
      <section id="persons"></section>
    `;

    this._$persons = this._root.querySelector('#persons');



    fetch(`http://www.martinetherton.com:9000/users`)
  //  fetch(`births.json`)
      .then((response) => response.text())
      .then((responseText) => {
        this.render(JSON.parse(responseText));
      })
      .catch((error) => {
        console.error(error);
      });

  }

  render(userData) {

    for (let i = 0; i < userData.length; i += 1) {
      const user = document.createElement('p');
      user.innerText = userData[i].firstName;
      this._$persons.appendChild(user);
    }
    // this._$persons.innerText = 'hello';
  }

  renderBirths() {
    for (let i = 0; i < this._births.length; i += 1) {
      const user = document.createElement('p');
      user.innerText = this._births[i].firstName;
      this._$persons.appendChild(user);
    }
  }

  // use setters and getters to create an API for the component
  set births(data) {
    if (this._births === data) return;
    this._births = data;
    this.renderBirths();
  }

  get births() {
    return this._births;
  }

}

window.customElements.define('me-one-name-study-births', MeOneNameStudyBirths);
