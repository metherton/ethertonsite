
class MeOneNameStudySearch extends HTMLElement {

  constructor() {
    super();
    this._root = this.attachShadow({"mode": "open"});
  }

  connectedCallback() {
    this._root.innerHTML = `
      <style>
      </style>
      <section>
      
      </section>

    `;

    // this._$ons = this._root.querySelector('#ons');
    this._$birthsButton = this._root.querySelector('#births');


  }

}

window.customElements.define('me-one-name-study-search', MeOneNameStudySearch);
