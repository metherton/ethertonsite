class MeBiography extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        p {
          color: red;
        }
      </style>
      <p>Me Biography</p>
    `;

  }
}

window.customElements.define('me-biography', MeBiography);
