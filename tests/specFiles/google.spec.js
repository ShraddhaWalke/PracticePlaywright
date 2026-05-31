import { test } from '@playwright/test';
import { GooglePage } from '../pageObjects/googlePage.js';

test('google search page object', async ({ page }) => {
  const googlePage = new GooglePage(page);
  await googlePage.goto();
  await googlePage.search('ipl');
  await googlePage.expectTitleContains('ipl');
});

