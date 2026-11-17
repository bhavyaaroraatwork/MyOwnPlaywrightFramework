import { test, expect } from '@playwright/test';
import { captureScreenshot } from '../utils/utils.js';
test('Bhavya s first testcase', async ({ page},testInfo ) => {
  await page.goto('https://www.saucedemo.com/');
   await captureScreenshot(
        page,
        testInfo,
        'Page load Successful'
    );

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag/);
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button',{ name:'Login'}).click();
   await captureScreenshot(
        page,
        testInfo,
        'Click successful'
    );
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');
   await captureScreenshot(
        page,
        testInfo,
        'Test completely successfully'
    );
  
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('',async( {page})=>{
  
}

);


