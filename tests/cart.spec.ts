import { test } from '@playwright/test';
import { CartPage } from '../src/pages/CartPage';

test.describe('DemoBlaze Cart tests', () => {
  test('Should be able to make an order', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.open('/cart.html');
    await cart.clickPlaceOrder();
    await cart.populatePurchaseProductModal();
    await cart.clickPurchaseButton();
    await cart.confirmationModalShouldBeVisible();
    await cart.confirmPurchase();
  });
});
