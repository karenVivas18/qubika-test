const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const CategoryPage = require('../pages/categoryPage');
const apiUtils = require('../../utils/*');
//const { uiUrl, testUser } = require('../../config/environment');

test.describe('Category Management E2E', () => {
  let loginPage, categoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    categoryPage = new CategoryPage(page);

    // Navigate to home page
    await loginPage.navigateTo(uiUrl);

    // Iniciar sesión
    await loginPage.login(testUser.email, testUser.password);

    // Validar que el usuario esté logueado
    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeTruthy();
  });

  test('Create and validate categories', async ({ page }) => {
    // Navegar a la página de categorías
    await categoryPage.goToCategories();

    // Crear una nueva categoría
    const categoryName = 'Test Category';
    await categoryPage.createCategory(categoryName);

    // Validar que la categoría esté visible
    const isCategoryVisible = await categoryPage.isCategoryVisible(categoryName);
    expect(isCategoryVisible).toBeTruthy();
  });
});
