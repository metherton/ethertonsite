module.exports = {
  'Login page test' : function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementPresent('me-top-menu', 1000)
      .pause(1000);




    browser.end();
  }
};
