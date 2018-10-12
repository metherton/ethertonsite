
class MeOneNameStudy extends HTMLElement {

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
      <p>Me One Name Study</p>
      <section id="persons"></section>
    `;

    this._$persons = this._root.querySelector('#persons');



    fetch(`http://www.martinetherton.com:9000/users`)
      .then((response) => response.text())
      .then((responseText) => {
        this.render(JSON.parse(responseText));
      })
      .catch((error) => {
        console.error(error);
      });

  }

  render(userData) {
    // Fill the respective areas of the card using DOM manipulation APIs
    // All of our components elements reside under shadow dom. So we created a this.shadowRoot property
    // We use this property to call selectors so that the DOM is searched only under this subtree
    // this.shadowRoot.querySelector('.card__full-name').innerHTML = userData.name;
    // this.shadowRoot.querySelector('.card__user-name').innerHTML = userData.username;
    // this.shadowRoot.querySelector('.card__website').innerHTML = userData.website;
    // this.shadowRoot.querySelector('.card__address').innerHTML = `<h4>Address</h4>
    //   ${userData.address.suite}, <br />
    //   ${userData.address.street},<br />
    //   ${userData.address.city},<br />
    //   Zipcode: ${userData.address.zipcode}`

    for (let i = 0; i < userData.length; i += 1) {
      const user = document.createElement('p');
      user.innerText = userData[i].firstName;
      this._$persons.appendChild(user);
    }
    // this._$persons.innerText = 'hello';
  }



}

window.customElements.define('me-one-name-study', MeOneNameStudy);
