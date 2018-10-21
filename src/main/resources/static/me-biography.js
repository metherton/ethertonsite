class MeBiography extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({mode: 'open'});
    this.awesomest = null;
  }
  connectedCallback() {
    this.awesomest = true;
    this._root.innerHTML = `
      <style>
        p {
          color: red;
        }
        .martin::slotted(h1) {
          color: green;
        }
      </style>
      <div class="martin">
        <slot name="bla">Me default Biography</slot>      
        <slot>should be replaced</slot>
      </div>
    `;

  }
}

window.customElements.define('me-biography', MeBiography);
