import { type Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class Homepage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
  }
}
