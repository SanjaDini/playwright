import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { Credentials } from '../utils/Credentials';

export class Login extends BasePage {
  readonly page: Page;
  readonly loginLink: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly welcomeMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.username = page.locator('#loginusername');
    this.password = page.locator('#loginpassword');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
  }

  async login() {
    await this.loginLink.click();
    await this.username.first().fill(Credentials.USERNAME);
    await this.password.fill(Credentials.PASSWORD);
    await this.loginButton.click();
    await this.homepageNavBarShouldBeVisible();
  }
}
