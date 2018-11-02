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
          
          nav {
            height: 2.6em
          }
          
          .title-slot::slotted(span) {
            /*font-size: 4em;*/
            color: white;
          }

          .links {
            /*display: inline-block;*/
            display: flex;
            width: 100%;
            height: 100%;
          }
         
          .title {
            /*display: inline-block;*/
            /*width: 30%;*/
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            width: 20%;
          }
  
          div.link, div.more {
          /*display: inline-block;*/
          /*width: 30%;*/
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            width: 20%;
            border-left: solid 1px ghostwhite;
          }
          
          a.link, a.more {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
          /*.more {*/
            /*text-align: center;*/
            /*width: 35%;*/
            /*!*display: inline-block;*!*/
          /*}*/
         
          .menu-layout {
            /*display: inline-block;*/
            width: 100%;
            height: 100%;
          }
          
          /*.search {*/
            /*!*display: inline-block;*!*/
            /*width: 2%;*/
          /*}*/
          
      </style>
      <nav class="menu-bar">
        <div class="menu-layout">
          <!--<slot class="title-slot" name="site-name">Site name</slot>-->
          <div class="links">
            <div class="title">
              <div class="text">Mep</div>
            </div>
            <div class="link">
              <div class="text"><a class="link" href="/home">Home</a></div>          
            </div>
            <div class="link">
              <div class="text"><a class="link" href="/about-me">About Me</a></div>          
            </div>
            <div class="link">
              <div class="text"><a class="link" href="/one-name-study">ONS</a></div>          
            </div>
            <div class="link">
              <div class="text"><a class="more" href="/more">More</a></div>          
            </div>
          </div>        
        </div>
        <!--<a class="search" href="/search">S</a>-->
      </nav>
    `;

  }
}

window.customElements.define('me-top-menu', MeTopMenu);
