
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
        <input id="searchBtn" type="button" value="Search">
      </section>

    `;

    // this._$ons = this._root.querySelector('#ons');
    this._$searchButton = this._root.querySelector('#searchBtn');
    this._$searchButton.addEventListener('click', (event) => {
    //    this.dispatchEvent(new CustomEvent('search', {detail: {type: 'births', composed: true}}));
      this.dispatchEvent(new CustomEvent('search', {bubbles: true, composed: true, detail: {type: 'births'}}));
    });

    // this.addEventListener('search', (event) => {
    //   window.alert('hi');
    //   this.dispatchEvent(new CustomEvent('search', {detail: {type: 'births'}}));
    // });

  }

}

window.customElements.define('me-one-name-study-search', MeOneNameStudySearch);
