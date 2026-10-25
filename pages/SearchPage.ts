import type { Page } from '@playwright/test';
import { searchLocators } from '../locators/search.locators';
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async searchFor(searchTerm: string) {
    await this.page.locator(searchLocators.searchBox).fill(searchTerm);
    await this.page.locator(searchLocators.searchSubmit).click();
  }
}