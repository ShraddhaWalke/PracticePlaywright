import { test, expect } from '@playwright/test';
import { DemoTestingPage } from '../pageObjects/demoTestingPage.js';

test('demo testing page object form submit', async ({ page }) => {
  const demoTestingPage = new DemoTestingPage(page);
  await demoTestingPage.goto();

  await demoTestingPage.fillContactForm({
    name: 'Shraddha',
    email: 'example@gmail.com',
    address: 'Maharashtra',
    phone: '1234567789',
    gender: 'female',
    weekday: 'monday',
    country: 'India',
    color: 'red',
    animal: 'cat',
    date: '03/12/2000'
  });

  await demoTestingPage.submit();
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
});
