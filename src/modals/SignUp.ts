import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { Credentials } from '../utils/Credentials';

export class SignUp extends BasePage {
  readonly page: Page;
  readonly signUpLink: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly signUpButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.signUpLink = page.getByRole('link', { name: 'Sign Up' });
    this.username = page.locator('#sign-username');
    this.password = page.locator('#sign-password');
    this.signUpButton = page.getByRole('button', { name: 'Sign Up' });
  }

  async signUp() {
    await this.signUpLink.click();
    await this.username.fill(Credentials.USERNAME);
    await this.password.fill(Credentials.PASSWORD);
    await this.signUpButton.click();
    await this.confirmDialog();
    await this.homepageNavBarShouldBeVisible();
  }
}
