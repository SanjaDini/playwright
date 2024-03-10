import { Locator, Page, expect } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
  readonly pageLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageLink = page.getByRole('link', { name: 'PRODUCT STORE' });
  }

  async open(partUrl?: string): Promise<void> {
    await this.page.goto(`${partUrl}`);
  }

  async homepageNavBarShouldBeVisible() {
    await expect(this.pageLink).toBeVisible();
  }

  async confirmDialog() {
    this.page.on('dialog', async (dialog) => {
      await dialog.accept();
    });
  }
}
