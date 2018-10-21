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
        .martin ::slotted(h3)  {
          color: blue;
        }
      </style>
      <div class="martin">
        <slot name="title">Me default Biography</slot>      
        <slot>should be replaced</slot>
        <p>should be red</p>
      </div>
    `;

  }
}

window.customElements.define('me-biography', MeBiography);
