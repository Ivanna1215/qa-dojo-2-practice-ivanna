// import { test, expect } from "@playwright/test";

// test("test", async ({ page }) => {
// //   const coffeeDrinks = [
//     "Espresso",
//     "Espresso_Macchiato",
// "Cappuccino"
// , "Espresso"],
// '"Flat_White"]', '[data-test="Americano"]', '[data-test="Cafe_Latte"]', '[data-test="Espresso_Con Panna"]'
// ];

// for (const cupSelector of coffeeCupSelectors){
//     await page.locator(`[data-test="${}"]`.click())
// }

//   await page.goto("https://coffee-cart.app/");
//   await page.locator('[data-test="Espresso"]').click();
//   await page.locator('[data-test="Espresso_Macchiato"]').click();
//   await page.locator('[data-test="Cappuccino"]').click();
//   await page.locator('[data-test="Espresso"]').click();
//   await page.locator('[data-test="Flat_White"]').click();
//   await page.locator('[data-test="Americano"]').click();
//   await page.locator('[data-test="Cafe_Latte"]').click();
//   await page.locator('[data-test="Espresso_Con Panna"]').click();
//   await page.getByLabel("Remove one Espresso", { exact: true }).click();
//   await page.locator('[data-test="checkout"]').click();
//   await page.getByLabel("Name").click();
//   await page.getByLabel("Name").fill("psp@test.com");
//   await page.getByLabel("Name").press("Tab");
//   await page.getByLabel("Email").fill("1214@gam.com");
//   await page.getByLabel("Promotion message").click();
//   //   await page.getByLabel("button", { name: "Submit" }).click();
// });
