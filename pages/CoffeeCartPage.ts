import { expect, type Locator, type Page } from "@playwright/test";
export class CoffeeCartPage {
  readonly page: Page;
  readonly cafeLatte: Locator;
  readonly checkout: Locator;
  readonly inputName: Locator;
  readonly inputEmail: Locator;
  readonly paymentDetails: Locator;
  readonly buttonClose: Locator;
  readonly espresso: Locator;
  readonly checkbox: Locator;
  readonly submitButton: Locator;
  readonly espressoConPanna: Locator;
  readonly cartPage: Locator;
  readonly listItemInCart: Locator;
  readonly cartPreviews: Locator;
  readonly snackbar: Locator;
  readonly payContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cafeLatte = page.locator('[data-test="Cafe_Latte"]');
    this.checkout = page.locator('[data-test="checkout"]');
    this.inputName = page.locator('input[id="name"]');
    this.inputEmail = page.locator('input[ id="email"]');
    this.paymentDetails = page.locator("h1");
    this.buttonClose = page.locator('button[class="close"]');
    this.espresso = page.locator('[data-test="Espresso"]');
    this.checkbox = page.locator('input[ type="checkbox"]');
    this.submitButton = page.locator('button[id="submit-payment"]');
    this.espressoConPanna = page.locator('[data-test="Espresso_Con Panna"]');
    this.cartPage = page.locator('//*[@href="/cart"]');
    this.listItemInCart = page.locator(".list-header+.list-item");
    this.cartPreviews = page.locator('ul[class="cart-preview show"]');
    this.snackbar = page.locator('[class="snackbar success"]');
    this.payContainer = page.locator('[class="pay-container"]');
  }

  async addCoffeeToOrder(coffee: Locator) {
    await coffee.click();
  }

  async orderCoffee(coffee: Locator, name: string, email: string) {
    this.addCoffeeToOrder(coffee);
    await this.checkout.click();
    await this.inputName.fill(name);
    await this.inputEmail.fill(email);
    await this.checkbox.check();
    await this.submitButton.click();
    await expect(this.snackbar).toContainText("Thanks for your purchase. Please check your email for payment.");
  }
}
