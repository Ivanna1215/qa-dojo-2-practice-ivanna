import { test, expect } from "@playwright/test";

let articleTitle = "Article from Ivanna Kovaliv";

test("Create new article", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com");
  await page.locator(`//*[@href="/login"]`).click();
  await page.locator('//input[@placeholder="Email"]').fill("ivanna.kovaliv1215@gmail.com");
  await page.locator('//input[@placeholder="Password"]').fill("asdfg");
  await page.locator('//button[contains(@class,"btn-lg")]').click();
  await page.locator('//a[contains(@href,"/editor")]').click();
  await page.locator('//input[@data-qa-id="editor-title"]').fill(articleTitle);
  await page.locator('//input[@data-qa-id="editor-description"]').fill("Christmas");
  await page.locator('//textarea[@placeholder="Write your article (in markdown)"]').fill(`I like to celebrating holiday`);
  await page.locator('//input[@placeholder="Enter tags"]').fill("1111");
  await page.locator('//form/button[@data-qa-id="editor-publish"]').click();
  await expect(page.locator('//h1[@data-qa-id="article-title"]')).toContainText(articleTitle);
});
