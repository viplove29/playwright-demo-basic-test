import { test, expect, Browser, Page, Locator } from "@playwright/test";
import * as data from "../test-data/test-data.json";
import { webkit, chromium, firefox } from "playwright";

test(
  "Test 2: Verify Login Functionality with incorrect password",
  {
    tag: "@smoke",
  },
  async () => {
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
    await emailId.fill(data.email);
    await password.fill(data.invalidPassword);
    await loginButton.click();

    //Valid login error message
    await expect(
      page.getByText("Error logging in: Request failed with status code 400")
    ).toBeVisible();

    // Verify page title and take screenshots
    const title = await page.title();
    console.log("Login page title : ", title);
    await page.screenshot({ path: ".\\screenshots\\loginFailed.png" });
    expect(title).toEqual("frontend");
    console.log("Test case 2 completed. User cannot login");
  }
);
