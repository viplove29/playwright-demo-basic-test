import { test, expect, Browser, Page, Locator } from "@playwright/test";
import * as data from "../test-data/test-data.json";
import { webkit, chromium, firefox } from "playwright";
import RegisterPage from "../pages/registerPage";

test("Test 3: Create Support ticket for Expidite Assit", async ({ page }) => {
  //Brower info & open new page
  const browser: Browser = await chromium.launch({ headless: false });
  // const page: Page = await browser.newPage();

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
