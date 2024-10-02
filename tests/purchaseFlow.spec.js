const { test, expect } = require("@playwright/test");
const HomePage = require("../pages/homePage");
const ProductPage = require("../pages/productPage");
const CartPage = require("../pages/cartPage");
const SignUpPage = require("../pages/signupPage");
const FakerHelper = require("../helpers/fakerHelper");

test.describe("Purchase Flow Test", () => {
  let homePage;
  let productPage;
  let cartPage;
  let signUpPage;

  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    signUpPage = new SignUpPage(page);
  });

  test.afterAll(async ({ browser }) => {
    await browser.close();
  });

  test("should complete a purchase flow up to the login modal", async () => {
    //constants with dynamic values
    const firstName = FakerHelper.generateRandomFirstName();
    const lastName = FakerHelper.generateRandomLastName();
    const password = FakerHelper.generateRandomPassword();
    const address = FakerHelper.generateRandomStreetAddress();
    const state = FakerHelper.generateRandomState();
    const city = FakerHelper.generateRandomCity();
    const zipCode = FakerHelper.generateRandomZipCode();
    const mobileNumber = FakerHelper.generateRandomPhoneNumber();
    const country = FakerHelper.getRandomCountry();
    const fullName = FakerHelper.generateRandomName();
    const newEmail = FakerHelper.generateRandomEmail();
    // Navigate to homePage
    await homePage.navigate("https://automationexercise.com/");
    // validate if there are cookies
    if (homePage.isConsentVisible()) {
      await homePage.acceptConsent();
    }
    // Go to product section
    await homePage.goToProducts();

    // Select the third product from the list and view detail
    await productPage.selectProduct(2);

    // Generate random quantity and add to cart
    const randomQuantity = FakerHelper.generateRandomQuantity();
    await productPage.setQuantity(randomQuantity);
    await productPage.addToCart();

    //Proceed to checkout and verify that the login modal is displayed
    await cartPage.proceedToCheckout();
    console.log("Test completed until modal  login");
    //signUp new user
    await cartPage.clickRegister();
    await cartPage.registerNewUser(fullName, newEmail);
    await signUpPage.fillOutSignUp(
      password,
      firstName,
      lastName,
      address,
      country,
      state,
      city,
      zipCode,
      mobileNumber
    
    );

    //  "Create Account"
    await signUpPage.createAcountSubmit();

    // Confirm that the account has been created
    const successMessage = await signUpPage.getSuccessMessage();
    expect(successMessage).toContain("ACCOUNT CREATED!");
    console.log("Test completed until account creation");
  });
});
