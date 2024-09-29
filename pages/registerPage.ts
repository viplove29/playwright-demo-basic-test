import { Page } from "@playwright/test";
export default class RegisterPage {
  constructor(public page: Page) {}
// Need to work in future if time permits
  async enterEmail(email: string) {
    await this.page.locator("input[name='email']").type(email);
  }

  async enterPassword(password: string) {
    await this.page.locator("input[name='password']").type(password);
  }
}
