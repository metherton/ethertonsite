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
            font-size: 0.8em;
            text-decoration: none;
            color: white;
            font-weight: bold;
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

          .links {
            display: inline-block;
            width: 84%;
          }
         
          .link {
            display: inline-block;
            width: 30%;
            text-align: center;
          }
          
          .more {
            text-align: center;
            width: 40%;
            display: inline-block;
          }
         
          .menu-layout {
            display: inline-block;
            width: 98%;
          }
          
          .search {
            display: inline-block;
            width: 2%;
          }
          
      </style>
      <nav class="menu-bar">
        <span class="menu-layout">
          <slot class="title-slot" name="site-name">Site name</slot>
          <span class="links">
            <a class="link" href="/home">Home</a>
            <a class="link" href="/about-me">About Me</a>
            <a class="more" href="/more">More</a>
          </span>        
        </span>
        <a class="search" href="/search">S</a>
      </nav>
    `;

  }
}

window.customElements.define('me-top-menu', MeTopMenu);
