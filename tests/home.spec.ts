
import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { homeLocators } from '../locators/home.locator';
import { SearchPage } from '../pages/SearchPage';

test('Logo is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);
  await homePage.open();
  await homePage.verifyLogoIsVisible();
  await searchPage.verifySearchBoxIsVisible();
  
});