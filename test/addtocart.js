describe('add to cart test', () => {

  before(browser => browser.navigateTo('https://middlemarch.netlify.app/'));

  it('adds 2 volumes of "Rhinoceros and Other Plays" to cart', browser => {
    const addToCartEl = browser.element.findByText('Rhinoceros and Other Plays').getParentElement().find('button');
    addToCartEl.click()
    addToCartEl.click()


      // .setAttribute('.new-arrivals-panel .col-md-6:nth-child(1)', 'style', 'position: relative; left: 200px;z-index: 100;')
      // .click('.new-arrivals-panel .col-md-6:nth-child(2) button.add-to-cart')
      // .click('.new-arrivals-panel .col-md-6:nth-child(2) button.add-to-cart')
     browser.assert.textEquals('.shopping-cart .badge', '2');
  });

  after(browser => browser.end());
});