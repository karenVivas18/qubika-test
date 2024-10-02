const { test, expect } = require('@playwright/test');
const HomePage = require("../pages/homePage");
const ProductPage = require("../pages/productPage");
const CartPage = require("../pages/cartPage");
const SignUpPage = require("../pages/signupPage");
const FakerHelper = require("../helpers/fakerHelper");

test.describe("Responsiveness Tests", () => {
  let homePage;
  let productPage;
  let cartPage;
  let signUpPage;

  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage(); // Define page variable
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    signUpPage = new SignUpPage(page);
  });

  test.afterAll(async ({ browser }) => {
    await browser.close();
  });

  // Test para Mobile
  test('should display the correct layout on mobile', async ({ page }) => {
    await homePage.navigate("https://automationexercise.com/");
    await page.setViewportSize({ width: 375, height: 667 }); // Size mobile view 
  });

});