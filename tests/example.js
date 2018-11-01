module.exports = {
  'Demo test' : function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementPresent('title', 1000)
      .pause(1000);

    browser.getTitle(function(title) {
      this.assert.ok(title.includes('martinetherton.com Home Page'));
    });


    browser.end();
  }
};
