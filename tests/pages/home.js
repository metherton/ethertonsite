var homeCommands = {
  shadowRoot: function(element) {
    return element.shadowRoot;
  }
};

module.exports = {
  commands: [homeCommands],
  url: 'http://localhost:8080',

  elements: {
    nav: {
      selector: 'me-top-menu'
    },
    aboutUsLink: {
      selector: 'a[href="/about-me"]'
    },
  },

};