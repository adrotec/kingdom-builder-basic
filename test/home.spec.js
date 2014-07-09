describe('home ', function () {

  beforeEach(function () {
    browser.get('index.html');
    waitForLoad();
  });

  it('should show welcome', () => {
    var message = element.all(by.css('.welcome-message')).get(0);
    var user = element.all(by.css('.user-display-name')).get(0);
    expect(message.getText()).toBe('Welcome to the Kingdom, Everyone');
    user.sendKeys('Anne');
    expect(message.getText()).toBe('Welcome to the Kingdom, Anne');
  });

  // TODO: replace this with a proper protractor/ng2.0 integration
  // and remove this function as well as all method calls.
  function waitForLoad() {
    browser.driver.sleep(SLEEP_INTERVAL);
  }

});
