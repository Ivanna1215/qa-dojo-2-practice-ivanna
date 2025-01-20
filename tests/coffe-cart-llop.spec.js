import { test, expect } from "@playwright/test";

test.describe("coffee-cart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test(" Using loop for clicking", async ({ page }) => {
    const cupLocator = page.locator(".cup-body");
    // const cupLocator = page.locator("//*[@class ="cup-body" and @class != "disabled-hover");
    const numberOfElements = await page.locator(".cup-body").count();
    const cupAllLocators = await cupLocator.all();

    // all повертає масив усіх елементів

    // for (let i = 0; i < numberOfElements; i++) {
    //   await cupLocator.nth(i).click();
    // }

    for (const cupLocator of cupAllLocators) {
      await cupLocator.click();
    }

    // cupAllLocators.forEach(async (cupLocator, index, array) => {
    //   await cupLocator.click();
    // });
  });
});
