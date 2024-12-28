import { test, expect } from "../fixtures/base";
import { CoffeeCartData } from "../test-data/coffee-cart.data";

test.describe("Homework_6", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test("[H-601] Form fields accept correct values", async ({ coffeeCartPage }) => {
    const coffeeCartData = new CoffeeCartData();
    await coffeeCartPage.addCoffeeToOrder(coffeeCartPage.cafeLatte);
    await coffeeCartPage.checkout.click();
    await coffeeCartPage.inputName.fill(coffeeCartData.name);
    await expect(coffeeCartPage.inputName).toHaveValue(coffeeCartData.name);
    await coffeeCartPage.inputEmail.fill(coffeeCartData.email);
    await expect(coffeeCartPage.inputEmail).toHaveValue(coffeeCartData.email);
  });

  test("[H-602] Check Payment details", async ({ coffeeCartPage }) => {
    const coffeeCartData = new CoffeeCartData();
    await coffeeCartPage.addCoffeeToOrder(coffeeCartPage.cafeLatte);
    await coffeeCartPage.checkout.click();
    await expect(coffeeCartPage.paymentDetails).toContainText(coffeeCartData.paymentDetails);
    await coffeeCartPage.buttonClose.click();
  });
  // This I'm not sure
  test("[H-603] Order coffee and check order", async ({ coffeeCartPage, page }) => {
    const coffeeCartData = new CoffeeCartData();
    await coffeeCartPage.addCoffeeToOrder(coffeeCartPage.espresso);
    await coffeeCartPage.cartPage.click();
    await expect(coffeeCartPage.listItemInCart).toContainText(coffeeCartData.espresso);
    await expect(coffeeCartPage.listItemInCart).toContainText("1");
  });
  // This I'm not sure
  test("[H-604] Check count coffee", async ({ coffeeCartPage, page }) => {
    const coffeeCartData = new CoffeeCartData();
    await coffeeCartPage.addCoffeeToOrder(coffeeCartPage.espresso);
    await coffeeCartPage.checkout.hover();
    await page.locator("button").getByText("+").click();
    await coffeeCartPage.cartPage.click();
    await expect(coffeeCartPage.payContainer).toContainText("2");
  });

  test("[H-605] Should be able to order a coffee", async ({ page, coffeeCartPage }) => {
    const coffeeCartData = new CoffeeCartData();
    await coffeeCartPage.orderCoffee(coffeeCartPage.espresso, coffeeCartData.name, coffeeCartData.email);
  });
  // This I'm not sure
  test("[H-606] Adding more cup and check total", async ({ page, coffeeCartPage }) => {
    const coffeeCartData = new CoffeeCartData();
    await coffeeCartPage.addCoffeeToOrder(coffeeCartPage.cafeLatte);
    await coffeeCartPage.addCoffeeToOrder(coffeeCartPage.espressoConPanna);
    await coffeeCartPage.cartPage.click();
    await expect(coffeeCartPage.payContainer).toContainText(coffeeCartData.cafeLatte);
    await expect(coffeeCartPage.payContainer).toContainText(coffeeCartData.espressoConPanne);
  });
});
