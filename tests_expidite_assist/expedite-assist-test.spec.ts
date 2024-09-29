import { test, expect, Browser, Page, Locator } from "@playwright/test";
import * as data from "../test-data/test-data.json";
import { webkit, chromium, firefox } from "playwright";
import RegisterPage from "../pages/registerPage";

test("Test 1: Register New User", async ({ page }) => {
  //Brower info & open new page
  const browser: Browser = await chromium.launch({ headless: false });
  // const page:Page= await browser.newPage();

  //locator
  const registerButton: Locator = page
    .getByRole("main")
    .getByRole("button", { name: "Register" });
  const emailId: Locator = page.getByLabel("Email");
  const password: Locator = page.getByLabel("Password");

  //Navigate to url & register email id
  await page.goto(data.pageUrl);
  await registerButton.click();
  await emailId.click();
  await emailId.fill(data.email);
  await password.click();
  await password.fill(data.password);
  await registerButton.click();

  // Verify title
  const title = await page.title();
  console.log("Home page title : ", title);

  await page.screenshot({ path: ".\\screenshots\\hompage1.png" });
  expect(title).toEqual("frontend");
});

test("Test 2: Verify Login Functionality", async () => {
  //Brower info & open new page
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();

  //locator
  const registerButton: Locator = page
    .getByRole("main")
    .getByRole("button", { name: "Register" });
  const emailId: Locator = page.getByLabel("Email");
  const password: Locator = page.getByLabel("Password");
  const loginButton: Locator = page
    .getByRole("main")
    .getByRole("button", { name: "Login" });

  //Navigate to url & login with credentials
  await page.goto(data.pageUrl);
  await loginButton.click();

  //Login
  await emailId.click();
  await emailId.fill(data.email);
  await password.click();
  await password.fill(data.email);
  await loginButton.click();

  // Verify title
  const title = await page.title();
  console.log("Login page title : ", title);
  await page.screenshot({ path: ".\\screenshots\\loginpage1.png" });
  expect(title).toEqual("frontend");
});

test("Test 3: Create Support ticket for Expidite Assit", async () => {
  //Brower info & open new page
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();

  //locator
  const emailId: Locator = page.getByLabel("Email");
  const password: Locator = page.getByLabel("Password");
  const loginButton: Locator = page
    .getByRole("main")
    .getByRole("button", { name: "Login" });
  const createSupportTicketButton: Locator = page.getByRole("button", {
    name: "Create Support Ticket",
  });
  const titleTicketTextBox: Locator = page.getByLabel("Title");
  const ticketDescription: Locator = page.getByLabel("Description");
  const submitTicket: Locator = page.getByRole("button", {
    name: "Submit Ticket",
  });

  //Navigate to url & login with credentials
  await page.goto(data.pageUrl);
  await loginButton.click();

  //Login
  await emailId.click();
  await emailId.fill(data.email);
  await password.click();
  await password.fill(data.password);
  await loginButton.click();

  //await delay(3000);
  // await page.waitForTimeout(1000);

  //Create Support ticket
  await createSupportTicketButton.click();
  await titleTicketTextBox.click();
  await titleTicketTextBox.fill(data.ticketTitle);
  await ticketDescription.click();
  await ticketDescription.fill(data.ticketDescription);
  await submitTicket.click();
  await browser.close();
});

test("Test 4: Create Case for Expidite Assit", async () => {
  //Brower info & open new page
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();

  //locator
  const emailId: Locator = page.getByLabel("Email");
  const password: Locator = page.getByLabel("Password");
  const loginButton: Locator = page
    .getByRole("main")
    .getByRole("button", { name: "Login" });
  const createCaseButton: Locator = page.getByRole("button", {
    name: "Create Case",
  });
  const caseName: Locator = page.getByLabel("Case Name");
  const selectItemDropdDown: Locator = page
    .getByRole("combobox")
    .locator("div")
    .filter({ hasText: "Select ItemSelect Item" })
    .locator("div");
  const selectItemDropdDownOption: Locator = page.getByRole("option");
  const submitCase: Locator = page.getByRole("button", { name: "Submit Case" });

  //Navigate to url & login with credentials
  await page.goto(data.pageUrl);
  await loginButton.click();

  //Login
  await emailId.click();
  await emailId.fill(data.email);
  await password.click();
  await password.fill(data.password);
  await loginButton.click();

  //Create Case
  await createCaseButton.click();
  await caseName.click();
  await caseName.fill(data.case);

  await selectItemDropdDown.click();
  await selectItemDropdDownOption.first().click();
  await submitCase.click();

  //Validated Home page items
  await expect(page.getByRole("button", { name: "Create Case" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Create Support Ticket" })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Home" })).toBeVisible();
  await expect(page.getByRole("banner")).toContainText("Expedite Assist");
  await expect(page.getByRole("main")).toContainText("Your Tickets");

  await browser.close();
});
