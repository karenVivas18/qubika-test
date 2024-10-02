const BasePage = require('./basePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.productSection = 'a[href="/products"]';
    this.consentButton = 'button.fc-button[aria-label="Consent"]';
  }

  async goToProducts() {
    await this.page.click(this.productSection);
  }
  async isConsentVisible(){
    try {
      return await this.page.locator(this.consentButton).isVisible();
    } catch (e) {
      return false;
    }
  } 
  async acceptConsent(){
    await this.page.click(this.consentButton);
  }
}

module.exports = HomePage;