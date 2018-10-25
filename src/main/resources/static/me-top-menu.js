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
          .menu-bar {
            display: flex;
            justify-content: space-between;
          }
          :host([theme="black"]) .menu-bar {
              background-color: black;
              width: var(--menu-width, 100%);
          }
          :host([theme="black"]) .menu-bar a {
            font-size: 1em;
            text-decoration: none;
            color: white;
          }
          :host([theme="navy"]) .menu-bar {
              background-color: navy;
              width: var(--menu-width, 100%);
          }
          :host([theme="navy"]) .menu-bar a {
            font-size: 1em;
            text-decoration: none;
            color: white;
          }

          nav a {
            display: inline-block;
            /*width: 15%;*/
          }

          /*.title-slot::slotted(span) {*/
            /*font-size: 4em;*/
            /*color: red;*/
          /*}*/
          
          .title-slot::slotted(span) {
            /*font-size: 4em;*/
            color: white;
          }
          /*span {*/
            /*font-size: 4em;*/
          /*}*/
         
      </style>
      <nav class="menu-bar">
        <slot class="title-slot" name="site-name">Site name</slot>
        <a href="/home">Home</a>
        <a href="/about-me">About Me</a>
        <a href="/more">More</a>
      </nav>
    `;

  }
}

window.customElements.define('me-top-menu', MeTopMenu);
