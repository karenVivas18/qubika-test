class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = 'input[formcontrolname="email"]';
    this.passwordInput = 'input[formcontrolname="password"]';
    this.loginButton = 'button:has-text("submit")'; //type type="submit"
    this.dashboardHeader = '.main-content';
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async isLoggedIn() {
    return await this.page.locator(this.dashboardHeader).isVisible();
  }
}

module.exports = LoginPage;