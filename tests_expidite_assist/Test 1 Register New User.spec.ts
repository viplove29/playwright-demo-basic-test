import { test, expect, Browser, Page, Locator } from "@playwright/test";
import * as data from "../test-data/test-data.json";
import { webkit, chromium, firefox } from "playwright";
import RegisterPage from "../pages/registerPage";

test(
  "Test 1: Register New User",
  {
    tag: "@smoke",
  },
  async ({ page }) => {
    //Brower info & open new page
    const browser: Browser = await chromium.launch({ headless: true });
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
    await emailId.fill(generateRandomEmail());
    await password.fill(data.password);
    await registerButton.click();

    await expect(page.getByText('Registration successful!')).toBeVisible();
    //await expect(page.getByText("Error registering user")).toBeVisible();

    // Verify title
    const title = await page.title();
    console.log("Home page title : ", title);

    await page.screenshot({ path: ".\\screenshots\\hompage1.png" });
    expect(title).toEqual("frontend");
    console.log("Test case 1 completed. New User Registered");
  }
);

function generateRandomEmail() {
  const randomNumber = Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999999
  const email = `testuserviplove${randomNumber}@example.com`;
  return email;
}

// Usage example:
const newEmail = generateRandomEmail();
console.log(newEmail);
