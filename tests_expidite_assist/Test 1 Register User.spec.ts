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
