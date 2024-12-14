import { test, expect } from "@playwright/test";
test.describe("playwright page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test(` Check link "Get started"`, async ({ page }) => {
    await expect(page.locator('[class="navbar__items"]')).toBeVisible();
    await expect(page.locator('[class="getStarted_Sjon"]')).toBeVisible();
  });

  test(` Check link "Generating tests" `, async ({ page }) => {
    await page.locator('[class="getStarted_Sjon"]').click();
    await page.locator(".menu__link", { hasText: "Generating tests" }).click();
    await expect(page.locator("h1")).toContainText("Generating tests");
  });

  test(" Check Installation Page", async ({ page }) => {
    await page.locator('[class="getStarted_Sjon"]').click();
    await expect(page.locator("h1")).toContainText("Installation");
  });

  test(" Check the 'Search' input", async ({ page }) => {
    await expect(page.locator(".DocSearch")).toBeVisible();
    await page.locator(".DocSearch").click();
    page.waitForSelector(".DocSearch-Input", { state: "attached", timeout: 60_000 });
    await page.locator(".DocSearch-Input").fill("Expect Timeout");
    // await expect(page.getByPlaceholder("Search docs")).toHaveValue("Expect Timeout");
  });

  test(" Check Git", async ({ page }) => {
    await page.locator('[class="navbar__item navbar__link header-github-link"]').click();
    await expect(page.locator('[class="HeaderMenu-nav"]')).toBeVisible();
  });
});
