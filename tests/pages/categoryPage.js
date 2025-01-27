class CategoryPage {
  constructor(page) {
    this.page = page;
    this.newCategoryButton = 'button:has-text("New Category")';
    this.categoryNameInput = 'input[name="categoryName"]';
    this.saveButton = 'button:has-text("Save")';
    this.categoryList = 'ul.category-list';
  }

  async goToCategories() {
    await this.page.click('text=Categories');
  }

  async createCategory(categoryName) {
    await this.page.click(this.newCategoryButton);
    await this.page.fill(this.categoryNameInput, categoryName);
    await this.page.click(this.saveButton);
  }

  async isCategoryVisible(categoryName) {
    return await this.page.locator(`${this.categoryList} >> text=${categoryName}`).isVisible();
  }
}

module.exports = CategoryPage;