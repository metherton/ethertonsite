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
            padding-left: 2%;
            padding-right: 2%;
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

          /*nav > a {*/
            /*display: inline-block;*/
            /*!*width: 15%;*!*/
          /*}*/

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
          .links {
            display: inline-block;
            width: 60%;
          }
         
          .link {
            display: inline-block;
            width: 35%;
          }
          
         
         
      </style>
      <nav class="menu-bar">
        <slot class="title-slot" name="site-name">Site name</slot>
        <span class="links">
          <a class="link" href="/home">Home</a>
          <a class="link" href="/about-me">About Me</a>
          <a class="more" href="/more">More</a>
        </span>
        <a href="/search">S</a>
      </nav>
    `;

  }
}

window.customElements.define('me-top-menu', MeTopMenu);
