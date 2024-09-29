// import { test, expect } from '@playwright/test';
import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'



test('Register New User', async () => {

  const browser:Browser= await chromium.launch({headless:false});
const page:Page= await browser.newPage();

//locator
    const registerButton:Locator = page.getByRole('main').getByRole('button', { name: 'Register' });
    const emailId:Locator= page.getByLabel('Email');
    const password:Locator = page.getByRole('main').getByRole('button', { name: 'Register' });
    const loginButton:Locator = page.getByRole('main').getByRole('button', { name: 'Login' });
    const titleTicketTextBox:Locator  = page.getByRole('main').getByRole('button', { name: 'Register' });
    const createSupportTicketButton:Locator  = page.getByLabel('Title');

// input values & url
    const pageUrl='http://100.27.30.112/';
    const emailID='viplove.user10@gmail.com';
    const passWord='viplove.user10@gmail.com';
//Navigate to url & register email id 
  await page.goto(pageUrl);
  await registerButton.click();
  await emailId.click();
  await emailId.fill(emailID);
  await password.click();
  await password.fill(passWord);
  await registerButton.click();

  // Verify title 
  const title= await page.title();
  console.log("Home page title : ",title);

  await page.screenshot({path: 'hompage.png'})
  expect(title).toEqual("frontend");

    //await delay(5000); //ReferenceError: delay is not defined
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 sec
    await browser.close();

});


test('has title expedite ', async () => {
  const browser:Browser= await chromium.launch({headless:false});
  const page:Page= await browser.newPage();

    // Register User
    await page.goto('http://100.27.30.112/register');
    await page.fill('input[id="input-4"]', 'testuser3@gmail.com');
    await page.fill('input[id="input-6"]', 'password123');
    await page.waitForTimeout(2000);
    await page.locator('//span[text() = "Register" ]').click;
    await page.waitForTimeout(7000);
    await expect(page).toHaveURL("http://100.27.30.112/login");

        // Log in
    await page.goto('http://100.27.30.112/login');
    await page.fill('input[id="input-4"]', 'testuser2@gmail.com');
    await page.fill('input[id="input-6"]', 'password123');
    await page.locator('//span[text() = "Login" ]').click;
    await page.waitForTimeout(7000);

    await expect(page).toHaveTitle("frontend");

    // Create Support Ticket
    //await page.goto('http://100.27.30.112/tickets');
    await page.fill('input[name="summary"]', 'Issue Summary');
    await page.fill('textarea[name="description"]', 'Description of the issue');
    await page.click('button#create-ticket');

    // // Create Case
    // await page.goto('http://100.27.30.112/cases');
    // await page.fill('input[name="item"]', 'Item Name');
    // await page.fill('textarea[name="issue"]', 'Description of the case');
    // await page.click('button#create-case');

  // Expect a title "to contain" a substring.

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



