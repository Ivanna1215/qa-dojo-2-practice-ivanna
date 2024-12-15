import { test, expect } from "@playwright/test";

test.describe("Homework_4", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test("Form fields accept correct values", async ({ page }) => {
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

  test("Order coffee and check order", async ({ page }) => {
    await page.locator('[data-test="Espresso"]').click();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    await expect(page.locator('[id="app"]')).toContainText("Espresso");
    await expect(page.locator('[id="app"]')).toContainText("1");
  });

  test("Check count coffee", async ({ page }) => {
    await page.locator('[data-test="Espresso"]').click();
    await page.locator('[data-test="checkout"]').hover();
    await expect(page.locator('ul[class="cart-preview show"]')).toBeAttached();
    await page.locator("button").getByText("+").click();
    await expect(page.locator('[id="app"]')).toContainText("2");
  });

  test("Should be able to order a coffee", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Espresso $" })).toBeVisible(); //preferable/*
    await expect.soft(page.getByRole("heading", { name: "Espresso $" })).toBeVisible(); //preferable/*
    // const header = page.locator('[data-test="Espresso"]').locator("//ancestor::li").locator("h4");
    // await expect(header).toContainText("Espresso"); /**ok*/
    // await expect(page.getByText("Espresso $")).toBeVisible(); /**could be better */
    // await expect(page.locator("//h4[contains(text(),'Espresso')]").first()).toBeVisible(); /**could be better */
    // await expect(page.locator("ul li h4", { hasText: "Espresso" })).toBeVisible(); /**ok */
    await page.locator('[data-test="Espresso"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('input[ id="name"]').fill("Ivanna");
    await page.locator('input[ id="email"]').fill("test@gmail.com");
    await page.locator('input[ type="checkbox"]').check();
    await page.locator('button[id="submit-payment"]').click();
    await expect(page.locator('[id="app"]')).toContainText("Thanks for your purchase. Please check your email for payment.");
  });

  test("Adding more cup and check total", async ({ page }) => {
    await page.locator('[data-test="Cafe_Latte"]').click();
    await page.locator('[data-test="Espresso_Con Panna"]').click();
    await page.locator('[aria-label="Cart page"]').click();
    await expect(page.locator("#app")).toContainText("Cafe Latte");
    await expect(page.locator("#app")).toContainText("Espresso Con Panna");
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
