const BasePage = require('./basePage');

class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    this.productItems = '.productinfo > a';   
    this.viewProductButton = 'a[href^="/product_details/"]'; 
    this.quantityInput = 'input[name="quantity"]';
    this.addToCartButton = 'button:has-text("Add to cart")';
  }

  async selectProduct(index) {
    const products = await this.page.$$(this.viewProductButton);
    if (products.length >= index + 1) {
      await products[index].click();  // select product based on index

    } else {
      throw new Error(`less that ${index + 1} available products `);
    }
  }

  async setQuantity(quantity) {
    await this.page.fill(this.quantityInput, quantity.toString());
  }

  async addToCart() {
    await this.page.click(this.addToCartButton);
    await this.page.waitForLoadState();
  }
}

module.exports = ProductPage;