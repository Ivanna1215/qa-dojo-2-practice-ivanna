

import { expect } from "@playwright/test";
import test, { chromium } from "@playwright/test";

test("test", async () => {
  // Arrange
  //запускає браузер
  const browser = await chromium.launch({ headless: false });

  //створю контекст
  const context = await browser.newContext();

  //створюємо page
  const page = await context.newPage();

  // переход на сторінку
  await page.goto("https://playwright.dev", { waitUntil: "networkidle" });

  // пошук елементу
  const generalLocator = page.locator("Cappuccino");

  page.locator("Cappuccino");
  page.getByLabel("Cappuccino");
  const cappuccinoCupLocator = page.locator("[aria-label = 'Cappuccino'");

  // Act
  // дії з елементом/ами
  page.locator("Cappuccino").click();
  page.locator("Cappuccino").fill("test");
  page.locator("Cappuccino").pressSequentially("test", { delay: 100 });

  // page.locator("Cappuccino").check();
  // page.locator("Cappuccino").uncheck();

  // очікування елемента
  await cappuccinoCupLocator.waitFor({ state: "attached", timeout: 60_000 });
  await expect(
    cappuccinoCupLocator,
    "я чекав на чашку кави, а вона не зʼявилась"
  ).toBeAttached({ timeout: 60_000 });

  // Assert
  // отримання інформації про веб-елементи
  const text = await generalLocator.textContent();

  const visibility = await generalLocator.isVisible(); // true false
  const enabled = await generalLocator.isEnabled(); // true false
  const checked = await generalLocator.isChecked(); // true false
  const editable = await generalLocator.isEditable(); // true false

  // перевірки
  await expect(generalLocator, "").toBeHidden();
  await expect(generalLocator, "").toBeVisible();
  await expect(generalLocator, "").toContainText("Якийсь текст");

  const cup = page.locator('//*[data-test = "Cappuccino"]');
});

/*
 планування
 налаштування середовища 
 знаходження локаторів (xpath/ css selector)
 написання тесту

Arrange Act Assert

test("test", async () => {
  // Arrange
  // Act
  // Assert
});

додавання перевірок
оптимізація тесту
*/