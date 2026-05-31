import { expect } from '@playwright/test';

export class GooglePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole('combobox');
  }

  async goto() {
    await this.page.goto('https://www.google.com');
  }

  async search(term) {
    // await this.searchInput.click();
    await this.searchInput.fill(term);
    await this.page.keyboard.press('Enter');
  }

  async expectTitleContains(term) {
    await expect(this.page).toHaveTitle(new RegExp(term, 'i'));
  }
}
