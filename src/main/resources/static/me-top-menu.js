class MeTopMenu extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({mode: 'open'});
    this.awesomest = null;
  }
  connectedCallback() {
    this.awesomest = true;
    this._root.innerHTML = `
      <style>
          :host([theme="black"]) .menu-bar {
              background-color: black;
              width: var(--menu-width, 100%);
          }
          :host([theme="black"]) .menu-bar a {
            font-size: 1.2em;
            text-decoration: none;
            color: white;
          }
          :host([theme="black"]) .menu-bar ::slotted(span) {
            color: white;
          }
         
      </style>
      <nav class="menu-bar">
        <slot name="site-name">Site name</slot>
        <a href="/home">Home</a>
        <a href="/about-me">About Me</a>
        <a href="/one-name-study">One Name Study</a>
      </nav>
    `;

  }
}

window.customElements.define('me-top-menu', MeTopMenu);
