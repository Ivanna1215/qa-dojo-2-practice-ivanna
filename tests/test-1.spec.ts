import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByLabel('Name').fill('Ivanna');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('ivanna@gmail.com');
  await page.getByLabel('Promotion agreement').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Thanks for your purchase.' }).click();
});