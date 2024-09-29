import { test, expect, Browser, Page, Locator } from "@playwright/test";
import * as data from "../test-data/test-data.json";
import { webkit, chromium, firefox } from "playwright";
import RegisterPage from "../pages/registerPage";

test("Test 2: Verify Login Functionality", async ({page}) => {
  //Brower info & open new page
  const browser: Browser = await chromium.launch({ headless: false });

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
