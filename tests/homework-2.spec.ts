import { test, expect } from "@playwright/test";

test.describe("coffee-cart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test(" Check coffee is visible and buy coffee", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Espresso $" })).toBeVisible();
    await page.locator('[data-test="Espresso"]').click();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    await page.locator('[data-test="checkout"]').click();
    await page.getByLabel("Name").click();
    await page.getByLabel("Name").fill("Ivanna");
    await page.getByLabel("Email").click();
    await page.getByLabel("Email").fill("test@gmail.com");
    await page.getByLabel("Promotion checkbox").check();
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.locator("#app")).toContainText("Thanks for your purchase. Please check your email for payment.");
  });

  test(" Buy coffee and check order", async ({ page }) => {
    await page.locator('[data-test="Espresso"]').click();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    await expect(page.locator("#app")).toContainText("Espresso");
    await expect(page.locator("#app")).toContainText("x 1");
  });

  test.skip("Check special propose", async ({ page }) => {
    await page.locator('[data-test="Cafe_Latte"]').click();
    await expect(page.locator("#app")).toContainText("It's your lucky day! Get an extra cup of Mocha for $4.");
    await expect(page.getByRole("button", { name: "Yes, of course!" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Nah, I'll skip." })).toBeVisible();
  });

  test.skip("Check count coffee", async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
    await page.locator('[data-test="Espresso"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.getByLabel("Add one Espresso", { exact: true }).click();
    await expect(page.locator("#app")).toContainText("x 2");
  });

  test.skip("Check remove coffee", async ({ page }) => {
    await page.locator('[data-test="Espresso_Macchiato"]').click();
    await page.getByLabel("Add one Espresso Macchiato").click();
    await expect(page.locator("#app")).toContainText("x 2");
    await page.getByLabel("Remove one Espresso Macchiato").click();
    await page.getByLabel("Remove one Espresso Macchiato").click();
    await expect(page.locator('[data-test="checkout"]')).toContainText("Total: $0.00");
  });

  test("Check Payment details", async ({ page }) => {
    await expect(page.locator('[data-test="Espresso"]')).toBeVisible();
    await page.locator('[data-test="Cafe_Latte"]').click();
    await page.locator('[data-test="checkout"]').click();
    await expect(page.locator("h1")).toContainText("Payment details");
    await page.getByRole("button", { name: "×" }).click();
  });

  test("Check value", async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
    await page.locator('[data-test="Cafe_Latte"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.getByLabel("Name").fill("Ivanna");
    await expect(page.getByLabel("Name")).toHaveValue("Ivanna");
    await page.getByLabel("Email").click();
    await page.getByLabel("Email").fill("test@gmail.com");
    await expect(page.getByLabel("Email")).toHaveValue("test@gmail.com");
  });

  test("If I don't pay anything", async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
    await page.locator('[data-test="checkout"]').click();
    await page.getByLabel("Name").fill("Ivanna");
    await page.getByLabel("Email").click();
    await page.getByLabel("Email").fill("test@gmail.com");
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.locator("#app")).toContainText("Thanks for your purchase. Please check your email for payment.");
  });
});

test.describe("playwright page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test(" Check link", async ({ page }) => {
    await expect(page.getByLabel("Main", { exact: true })).toContainText("Docs");
    await expect(page.getByLabel("Main", { exact: true })).toContainText("API");
    await expect(page.getByLabel("Main", { exact: true })).toContainText("Node.js");
    await expect(page.getByLabel("Main", { exact: true })).toContainText("Community");
  });

  test(" Check Installation Page", async ({ page }) => {
    await expect(page.getByRole("link", { name: "Get started" })).toBeVisible();
    await page.getByRole("link", { name: "Get started" }).click();
    await expect(page.locator("h1")).toContainText("Installation");
    await expect(page.getByRole("article")).toContainText("init playwright@latest");
    await expect(page.getByText("playwright.config.tspackage.")).toBeVisible();
  });

  test(" Check the 'Search' input", async ({ page }) => {
    await expect(page.getByLabel("Search")).toBeVisible();
    await page.getByLabel("Search").click();
    await page.getByPlaceholder("Search docs").fill("Expect Timeout");
    await expect(page.getByPlaceholder("Search docs")).toHaveValue("Expect Timeout");
  });

  test(" Check Git", async ({ page }) => {
    const page1Promise = page.waitForEvent("popup");
    await page.getByLabel("GitHub repository").click();
    const page1 = await page1Promise;
    await expect(page1.getByText("Navigation Menu Toggle")).toBeVisible();
  });

  test(" Check btn", async ({ page }) => {
    await page.getByRole("link", { name: "Get started" }).click();
    await page.getByRole("link", { name: "Generating tests" }).click();
    await expect(page.locator("h1")).toContainText("Generating tests");
    await expect(page.getByLabel("Copy code to clipboard")).toBeVisible();
  });
});
