const BasePage = require('./basePage');

class SignUpPage extends BasePage {
  
  constructor(page) {
    super(page);
    this.passwordInput = 'input[data-qa="password"]';
    this.firstName = 'input[data-qa="first_name"]';
    this.lastName = 'input[data-qa="last_name"]';
    this.address = 'input[data-qa="address"]';
    this.country = 'select[data-qa="country"]';
    this.state = 'input[data-qa="state"]';
    this.city = 'input[data-qa="city"]';
    this.zipCode = 'input[data-qa="zipcode"]';
    this.mobileNumber = 'input[data-qa="mobile_number"]';
    this.submitBtn = 'button[data-qa="create-account"]';
    this.successMessage = 'h2[data-qa="account-created"]'
    
  }
  

  async fillOutSignUp(password,firstName, lastName, address, country, state, city, zipCode, mobileNumber){
    await this.page.fill(this.passwordInput, password);
    await this.page.fill(this.firstName, firstName);
    await this.page.fill(this.lastName, lastName);
    await this.page.fill(this.address, address);
    await this.page.click(this.country);
    await this.page.selectOption(this.country, { label: country});
    await this.page.click('body');
    await this.page.fill(this.state,state);
    await this.page.fill(this.city, city);
    await this.page.fill(this.zipCode, zipCode);
    await this.page.fill(this.mobileNumber, mobileNumber);

  }
  async createAcountSubmit(){
    await this.page.click(this.submitBtn);
  }
  async getSuccessMessage(){
    return  await this.page.locator(this.successMessage).innerText();
  }
}

module.exports = SignUpPage;