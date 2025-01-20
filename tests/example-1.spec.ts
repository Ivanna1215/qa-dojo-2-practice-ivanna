import { test } from "@playwright/test";

test("serial", async ({ page }) => {
  console.log("Test is start");
  await page.waitForTimeout(10_000);
  console.log("Test is end");
});

test("serial-1", async ({ page }) => {
  console.log("Test is start");
  await page.waitForTimeout(10_000);
  console.log("Test is end");
});

test("serial-2", async ({ page }) => {
  console.log("Test is start");
  await page.waitForTimeout(10_000);
  console.log("Test is end");
});

test.describe("group", () => {
  test("serial3", async ({ page }) => {
    console.log("Test is start");
    await page.waitForTimeout(10_000);
    console.log("Test is end");
  });

  test("serial-4", async ({ page }) => {
    console.log("Test is start");
    await page.waitForTimeout(10_000);
    console.log("Test is end");
  });

  test("serial-5", async ({ page }) => {
    console.log("Test is start");
    await page.waitForTimeout(10_000);
    console.log("Test is end");
  });
});
