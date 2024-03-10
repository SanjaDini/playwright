import { test } from '@playwright/test';
import { Login } from '../src/modals/Login';

test.describe('DemoBlaze Login tests', () => {
  test('Should be able to Login', async ({ page }) => {
    const login = new Login(page);
    await login.open('/');
    await login.login();
  });
});
