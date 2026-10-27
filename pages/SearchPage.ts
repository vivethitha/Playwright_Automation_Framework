import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { searchLocators } from '../locators/search.locators';
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
  
  constructor(page: Page) {
    super(page);
  }

   async verifySearchBoxIsVisible() {
    await expect(this.page.locator(searchLocators.searchBox)).toBeVisible();
  }
  async searchFor(searchTerm: string) {
    await this.page.locator(searchLocators.searchBox).fill(searchTerm);
    await this.page.locator(searchLocators.searchSubmit).click();
  }
}