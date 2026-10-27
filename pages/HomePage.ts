import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { amazonLocators } from '../locators/amazon.locators';
import { homeLocators } from '../locators/home.locator';
import { searchLocators } from '../locators/search.locators';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    const baseUrl = process.env.APP_URL || 'https://www.amazon.com';
    const username = process.env.AMAZON_USERNAME || 'your_email_or_phone';
    await this.page.goto(baseUrl);
    await this.page.waitForLoadState('domcontentloaded');
  }
  async verifyLogoIsVisible() {
    await expect(this.page.locator(homeLocators.amazonlogo)).toBeVisible();
  }
 

  async goToSignIn() {
    
    const signInUrl = 'https://www.amazon.com/ap/signin';
    await this.page.goto(signInUrl);
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector(amazonLocators.emailInput, { timeout: 20000 });
  }

  async searchProduct(productName: string) {
    await this.page.fill(amazonLocators.searchBox, productName);
    await this.page.click(amazonLocators.searchSubmit);
  }
}
