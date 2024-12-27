import { expect, type Locator, type Page } from "@playwright/test";
export class LocatorsPage {
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
}
