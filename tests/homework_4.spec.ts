import { test, expect } from "@playwright/test";

test.describe("Homework_4", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test("Verify fields in Payment details", async ({ page }) => {
    await page.locator('[data-test="checkout"]').click();
    expect(page.locator('input[ id="name"]')).toBeEditable;
    expect(page.locator('input[ id="email"]')).toBeEditable;
  });

  test("Check value", async ({ page }) => {
    await page.locator('[data-test="Cafe_Latte"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('input[ id="name"]').fill("Ivanna");
    await expect(page.locator('input[ id="name"]')).toHaveValue("Ivanna");
    await page.locator('input[ id="email"]').fill("test@gmail.com");
    await expect(page.locator('input[ id="email"]')).toHaveValue("test@gmail.com");
  });

  test("Check Payment details", async ({ page }) => {
    await page.locator('[data-test="Cafe_Latte"]').click();
    await page.locator('[data-test="checkout"]').click();
    await expect(page.locator("h1")).toContainText("Payment details");
    await page.locator('button[class="close"]').click();
  });

  test("Buy coffee and check order", async ({ page }) => {
    await page.locator('[data-test="Espresso"]').click();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    await expect(page.locator('[id="app"]')).toContainText("Espresso");
    await expect(page.locator('[id="app"]')).toContainText("x 1");
  });

  test("Check count coffee", async ({ page }) => {
    await page.locator('[data-test="Espresso"]').click();
    await page.locator('[data-test="checkout"]').hover();
    await expect(page.locator('ul[class="cart-preview show"]')).toBeAttached();
    await page.locator("button").getByText("+").click();
    await expect(page.locator('[id="app"]')).toContainText("x 2");
  });

  test("Check coffee is visible and buy coffee", async ({ page }) => {
    await expect(page.locator("ul li h4").nth(1)).toBeVisible();
    await page.locator('[data-test="Espresso"]').click();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('input[ id="name"]').fill("Ivanna");
    await page.locator('input[ id="email"]').fill("test@gmail.com");
    await page.locator('input[ type="checkbox"]').check();
    await page.locator('button[id="submit-payment"]').click();
    await expect(page.locator('[id="app"]')).toContainText("Thanks for your purchase. Please check your email for payment.");
  });

  // Is this BAG?
  test("If I don't pay anything", async ({ page }) => {
    await page.locator('[data-test="checkout"]').click();
    await page.locator('input[ id="name"]').fill("Ivanna");
    await page.locator('input[ id="email"]').fill("test@gmail.com");
    await page.locator('button[id="submit-payment"]').click();
    await expect(page.locator('[id="app"]')).toContainText("Thanks for your purchase. Please check your email for payment.");
  });
});
