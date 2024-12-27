import { test, expect } from "../fixtures/base";

test.describe("Homework_4", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test("Form fields accept correct values", async ({ locatorsPage }) => {
    await locatorsPage.cafeLatte.click();
    await locatorsPage.checkout.click();
    await locatorsPage.inputName.fill("Ivanna");
    await expect(locatorsPage.inputName).toHaveValue("Ivanna");
    await locatorsPage.inputEmail.fill("test@gmail.com");
    await expect(locatorsPage.inputEmail).toHaveValue("test@gmail.com");
  });

  test("Check Payment details", async ({ locatorsPage }) => {
    await locatorsPage.cafeLatte.click();
    await locatorsPage.checkout.click();
    await expect(locatorsPage.paymentDetails).toContainText("Payment details");
    await locatorsPage.buttonClose.click();
  });
  // This I'm not sure
  test("Order coffee and check order", async ({ locatorsPage, page }) => {
    await locatorsPage.espresso.click();
    await locatorsPage.cartPage.click();
    await expect(locatorsPage.listItemInCart).toContainText("Espresso");
    await expect(locatorsPage.listItemInCart).toContainText("1");
  });
  // This I'm not sure
  test("Check count coffee", async ({ locatorsPage, page }) => {
    await locatorsPage.espresso.click();
    await locatorsPage.checkout.hover();
    await page.locator("button").getByText("+").click();
    await locatorsPage.cartPage.click();
    await expect(locatorsPage.payContainer).toContainText("2");
  });

  test("Should be able to order a coffee", async ({ page, locatorsPage }) => {
    await locatorsPage.espresso.click();
    await locatorsPage.checkout.click();
    await locatorsPage.inputName.fill("Ivanna");
    await locatorsPage.inputEmail.fill("test@gmail.com");
    await locatorsPage.checkbox.check();
    await locatorsPage.submitButton.click();
    await expect(locatorsPage.snackbar).toContainText("Thanks for your purchase. Please check your email for payment.");
  });
  // This I'm not sure
  test("Adding more cup and check total", async ({ page, locatorsPage }) => {
    await locatorsPage.cafeLatte.click();
    await locatorsPage.espressoConPanna.click();
    await locatorsPage.cartPage.click();
    await expect(locatorsPage.payContainer).toContainText("Cafe Latte");
    await expect(locatorsPage.payContainer).toContainText("Espresso Con Panna");
  });
});
