
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
   //   const user = document.createElement('p');
      const user = document.createElement('me-birth-record');
      this._$persons.appendChild(user);
      user.birth = userData[i];
    }
  }


}

window.customElements.define('me-one-name-study-births', MeOneNameStudyBirths);
