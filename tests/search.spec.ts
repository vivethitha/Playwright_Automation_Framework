import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { readExcelData } from '../utils/excelReader';

const searchRows = readExcelData('amazon-search-data.xlsx');

for (const [index, row] of searchRows.entries()) {
  const searchTerm = String(row.searchTerm).trim();

  test(`search for ${searchTerm} - case ${index + 1}`, async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);

    await homePage.open();
    await searchPage.searchFor(searchTerm);

    await expect(page).toHaveURL(/amazon\.com\/s\//i);
  });
   test(`search for ${searchTerm} - case ${index + 1} newly added`, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.searchProduct(productName);
    const searchPage = new SearchPage(page);

    await homePage.open();
    await searchPage.searchFor(searchTerm);

    await expect(page).toHaveURL(/amazon\.com\/s\//i);
  });
  test(`search for ${searchTerm} - case ${index + 1} second added`, async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);

    await homePage.open();
    await searchPage.searchFor(searchTerm);

    await expect(page).toHaveURL(/amazon\.com\/s\//i);
  });
    test(`search for ${searchTerm} - case ${index + 1} for merge resolution`, async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);

    await homePage.open();
    await searchPage.searchFor(searchTerm);

    await expect(page).toHaveURL(/amazon\.com\/s\//i);
  });
}
