import { test, expect } from "@playwright/test";

test.describe("Homework_3", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test("Check coffee is visible", async ({ page }) => {
    await expect(page.locator("#app")).toContainText("Espresso Macchiato $12.00");
  });

  test("Check locator", async ({ page }) => {
    await page.locator('[data-test="Espresso_Macchiato"]').click();
    await page.locator('[data-test="checkout"]').click();
    const modalPaymentDetails = page.locator('[class="modal-content size"]');
    await modalPaymentDetails.waitFor({ state: "attached", timeout: 10_000 });
  });
});
