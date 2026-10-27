
import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { homeLocators } from '../locators/home.locator';

test('Logo is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.open();
  await homePage.goToSignIn();
  
});