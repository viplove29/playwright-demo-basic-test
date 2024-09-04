// import { test, expect } from '@playwright/test';
import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('has title', async () => {
  const browser:Browser= await chromium.launch({headless:false});
  const page:Page= await browser.newPage();
  await page.goto('https://botd-q-360iis-1.devop.vertafore.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/AMS360 Login/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://botd-q-360iis-1.devop.vertafore.com');

  // Click the get started link.
  await page.locator('#btnLogin').click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const name = await page.innerText('.navbar__title');
  expect(name).toBe('Playwright');
});
