import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { Payment } from '../utils/Payment';

export class CartPage extends BasePage {
  readonly page: Page;
  readonly placeOrder: Locator;
  readonly name: Locator;
  readonly country: Locator;
  readonly city: Locator;
  readonly creditCard: Locator;
  readonly month: Locator;
  readonly year: Locator;
  readonly purchaseButton: Locator;
  readonly confirmationModal: Locator;
  readonly confirmationModalItems: Locator;
  readonly confirmationButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.placeOrder = page.getByRole('button', { name: 'Place order' });
    this.name = page.locator('#name');
    this.country = page.locator('#country');
    this.city = page.locator('#city');
    this.creditCard = page.locator('#card');
    this.month = page.locator('#month');
    this.year = page.locator('#year');
    this.purchaseButton = page.getByRole('button', { name: 'Purchase' });
    this.confirmationModal = page.getByText('Thank you for your purchase!');
    this.confirmationModalItems = page.locator('.lead.text-muted');
    this.confirmationButton = page.getByRole('button', { name: 'OK' });
  }

  async clickPlaceOrder() {
    await this.placeOrder.click();
  }

  async populatePurchaseProductModal() {
    await this.name.fill(Payment.NAME);
    await this.country.fill(Payment.COUNTRY);
    await this.city.fill(Payment.CITY);
    await this.creditCard.fill(Payment.CREDIT_CARD);
    await this.month.fill(Payment.MONTH);
    await this.year.fill(Payment.YEAR);
  }

  async confirmationModalShouldBeVisible() {
    await expect(this.confirmationModal).toBeVisible();
    await expect(this.confirmationModalItems).toContainText(Payment.NAME);
    await expect(this.confirmationModalItems).toContainText(
      Payment.CREDIT_CARD
    );

    // should fail: date and year has incorect values
    await expect(this.confirmationModalItems).toContainText(Payment.YEAR);
  }

  async confirmPurchase() {
    await this.confirmationButton.click();
  }

  async clickPurchaseButton() {
    await this.purchaseButton.click();
  }
}
