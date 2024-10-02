const BasePage = require('./basePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.viewCartButton = 'a:has-text("View Cart")';
    this.checkoutButton = 'a:has-text("Proceed To Checkout")';
    this.loginModal = '#checkoutModal';
    this.registerBtn = 'u:has-text("Register / Login")';
    this.newName = 'input[data-qa="signup-name"]';
    this.newEmail = 'input[data-qa="signup-email"]';
    this.signupBtn = 'button[data-qa="signup-button"]';
  }

  async proceedToCheckout() {
    await this.page.click(this.viewCartButton);
    await this.page.click(this.checkoutButton);
    await this.page.waitForSelector(this.loginModal);  // Esperar al modal de login
  }
  async clickRegister(){
    await this.page.waitForSelector(this.registerBtn, { state: 'visible' });
    await this.page.click(this.registerBtn);
  }
  async registerNewUser(newName, newEmail ){
    await this.page.waitForSelector(this.newName, { state: 'visible' });
    await this.page.fill(this.newName, newName);
    await this.page.fill(this.newEmail,newEmail);
    await this.page.click(this.signupBtn);
  }
}

module.exports = CartPage;