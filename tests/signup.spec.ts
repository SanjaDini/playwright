import { test } from '@playwright/test';
import { SignUp } from '../src/modals/SignUp';

test.describe('DemoBlaze SignUp tests', () => {
  test('Should be able to Sign Up', async ({ page }) => {
    const signup = new SignUp(page);
    await signup.open('/');
    await signup.signUp();
  });
});
