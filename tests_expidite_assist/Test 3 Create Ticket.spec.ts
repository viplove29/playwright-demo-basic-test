import { test, expect, Browser, Page, Locator } from "@playwright/test";
import * as data from "../test-data/test-data.json";
import { webkit, chromium, firefox } from "playwright";
import RegisterPage from "../pages/registerPage";

test(
  "Test 3: Create Support ticket for Expidite Assit",
  {
    tag: "@smoke",
  },
  async ({ page }) => {
    //Brower info & open new page
    const browser: Browser = await chromium.launch({ headless: true });
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
    await emailId.fill(data.email);
    await password.fill(data.password);
    await loginButton.click();

    //Create Support ticket
    await createSupportTicketButton.click();
    await titleTicketTextBox.fill(data.ticketTitle);
    await ticketDescription.fill(data.ticketDescription);
    await submitTicket.click();

    //Validate ticket created succsfully message
    await expect(page.getByText("Ticket created successfully!")).toBeVisible();
  }
);
