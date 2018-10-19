
class MeOneNameStudy extends HTMLElement {

  constructor() {
    super();
    this._root = this.attachShadow({"mode": "open"});
    this._$birthsButton = null;
  //  this._$persons = null;
  }

  connectedCallback() {
    this._root.innerHTML = `
      <style>
        p {
          color: red;
        }
      </style>
      <script src="me-one-name-study-births.js"></script>
      <p>Me One Name Study</p>
      <button id="births">Show Births</button>
      <me-one-name-study-births id="births"></me-one-name-study-births>
      <!--<section id="persons"></section>-->
    `;

    // this._$persons = this._root.querySelector('#persons');



    // fetch(`http://www.martinetherton.com:9000/users`)
    //   .then((response) => response.text())
    //   .then((responseText) => {
    //     this.render(JSON.parse(responseText));
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    
    this._$birthsButton = this._root.querySelector('#births');
    this._$birthsButton.addEventListener('click', () => {
      fetch(`births.json`)
        .then((response) => response.text())
        .then((responseText) => {
          this.setBirths(JSON.parse(responseText));
        })
        .catch((error) => {
          console.error(error);
        });
      
    });

  }

  setBirths(births) {
    const $births = document.getElementById("births");
    $ons.births = births;
  }
  
  render(userData) {

    for (let i = 0; i < userData.length; i += 1) {
      const user = document.createElement('p');
      user.innerText = userData[i].firstName;
      this._$persons.appendChild(user);
    }
    // this._$persons.innerText = 'hello';
  }

  // renderUsers() {
  //   for (let i = 0; i < this._users.length; i += 1) {
  //     const user = document.createElement('p');
  //     user.innerText = this._users[i].firstName;
  //     this._$persons.appendChild(user);
  //   }
  // }

  // use setters and getters to create an API for the component
  // set users(data) {
  //   if (this._users === data) return;
  //   this._users = data;
  //   this.renderUsers();
  // }
  //
  // get users() {
  //   return this._users;
  // }

}

window.customElements.define('me-one-name-study', MeOneNameStudy);
