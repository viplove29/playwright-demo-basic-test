
import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

  // input values & url
  const pageUrl:string='http://100.27.30.112/';
  const emailID:string='viplove.user15@gmail.com';
  const passWord:string='viplove.user15@gmail.com';

test('Register New User', async () => {

  //Brower info & open new page
  const browser:Browser= await chromium.launch({headless:false});
  const page:Page= await browser.newPage();

  //locator
  const registerButton:Locator = page.getByRole('main').getByRole('button', { name: 'Register' });
  const emailId:Locator= page.getByLabel('Email');
  const password:Locator = page.getByLabel('Password');;

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

  await page.screenshot({path: '.\screenshots\hompage.png'})
  expect(title).toEqual("frontend");

  //await delay(5000); 
  await new Promise(resolve => setTimeout(resolve, 2000)); // 5 sec
  await browser.close();

});


test('Verify Login Functionality', async () => {

  //Brower info & open new page
  const browser:Browser= await chromium.launch({headless:false});
  const page:Page= await browser.newPage();

  //locator
  const registerButton:Locator = page.getByRole('main').getByRole('button', { name: 'Register' });
  const emailId:Locator= page.getByLabel('Email');
  const password:Locator = page.getByLabel('Password');;
  const loginButton:Locator = page.getByRole('main').getByRole('button', { name: 'Login' });

  //Navigate to url & register email id 
  await page.goto(pageUrl);
  await loginButton.click();

  //Login 
  await emailId.click();
  await emailId.fill(emailID);
  await password.click();
  await password.fill(passWord);
  await loginButton.click();

  // Verify title 
  const title= await page.title();
  console.log("Login page title : ",title);
  await page.screenshot({path: 'loginpage.png'})
  expect(title).toEqual("frontend");
  await browser.close();

});


test('Creat Support ticket for Expidite Assit', async () => {

  //Brower info & open new page
  const browser:Browser= await chromium.launch({headless:false});
  const page:Page= await browser.newPage();

  //locator
  const emailId:Locator= page.getByLabel('Email');
  const password:Locator = page.getByLabel('Password');;
  const loginButton:Locator = page.getByRole('main').getByRole('button', { name: 'Login' });
  const createSupportTicketButton:Locator  = page.getByRole('button', { name: 'Create Support Ticket' });
  const titleTicketTextBox:Locator  = page.getByLabel('Title');
  const ticketDescription:Locator  = page.getByLabel('Description');
  const submitTicket:Locator  = page.getByRole('button', { name: 'Submit Ticket' });

  //Navigate to url & register email id 
  await page.goto(pageUrl);
  await loginButton.click();

  //Login 
  await emailId.click();
  await emailId.fill(emailID);
  await password.click();
  await password.fill(passWord);
  await loginButton.click();

//Create Support ticket
  await createSupportTicketButton.click();
  await titleTicketTextBox.click();
  await titleTicketTextBox.fill('test ticket Viplove');
  await ticketDescription.click();
  await ticketDescription.fill(' There is some issue with Ui please fix it Viplove');
  await submitTicket.click();
  await browser.close();
});


test('Creat Case for Expidite Assit', async () => {

  //Brower info & open new page
  const browser:Browser= await chromium.launch({headless:false});
  const page:Page= await browser.newPage();

  //locator
  const emailId:Locator= page.getByLabel('Email');
  const password:Locator = page.getByLabel('Password');;
  const loginButton:Locator = page.getByRole('main').getByRole('button', { name: 'Login' });
  const createCaseButton:Locator  = page.getByRole('button', { name: 'Create Case' });
  const caseName:Locator  =page.getByLabel('Case Name');
  const selectItemDropdDown:Locator  = page.getByRole('combobox').locator('div').filter({ hasText: 'Select ItemSelect Item' }).locator('div');
  const selectItemDropdDownOption:Locator  = page.getByRole('option');
  const submitCase:Locator  = page.getByRole('button', { name: 'Submit Case' });

//Navigate to url & register email id 
await page.goto(pageUrl);
await loginButton.click();

//Login 
await emailId.click();
await emailId.fill(emailID);
await password.click();
await password.fill(passWord);
await loginButton.click();

//Create Case
await createCaseButton.click();
await caseName.click();
await caseName.fill('Case Nunber 12213');
await selectItemDropdDown.click();
await selectItemDropdDownOption.first().click();
await submitCase.click();

//Validated Home page items
await expect(page.getByRole('button', { name: 'Create Case' })).toBeVisible();
await expect(page.getByRole('button', { name: 'Create Support Ticket' })).toBeVisible();
await expect(page.getByRole('button', { name: 'Home' })).toBeVisible();
await expect(page.getByRole('banner')).toContainText('Expedite Assist');
await expect(page.getByRole('main')).toContainText('Your Tickets');
await browser.close();

});