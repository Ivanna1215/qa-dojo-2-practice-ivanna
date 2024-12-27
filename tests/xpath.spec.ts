/*

DOM дерево - це програмний інтерфейс 
розробник міг взаємодіяти у вигляді нодів(вузлів)

DOM дерево - це набір вузлів які об'єднані між собою структурою, верхній вузол html

Ноди бувають по відношенню один до одного 
  child node , 
  parent , 
  sibling
  ancestor (вищий давній родич) все що вище парент, пращур 
/* 

За типами :
text node 
element node
attribute node
*/
// https://0xedward.github.io/dom-visualizer/
/*

/*
кожний наступний елемент розділяється /

// - це будь який елемент з тегом ;
//body/div 
//div -  знайде всі div елементи

для того щоб працювати з атрибутами потрібно використовувати @ 
//div[@id='app'] поверни будь який дів в якому є атрибут зі значенням  app 

//* зірочка це заміна на будь що 
//*[@id="app"]

:: використовуються у функціях по навігації дом дереву
// піднятись на два рівні вище 
якщо хочете скіпнути елемент то використ зірочку 

// вниз 
//button[@data-test="checkout"]
/button[@data-test="checkout"]

//h1[text() = 'Demo Article']//ancestor::div[@data-qa-type = ""]

//h1[text() = 'Demo Article']//ancestor::div[@data-qa-type="article-preview"]

//*[@tag-list]

//div[@class = "tag-list"]
//*[text()="Popular Tags"]/following-sibling::div

*/ /*[@class="sidebar"]//*[@class="tag-list"]
//*[contains(@class,"tag-pill")]
//a[contains(@href,"tag")]
and об'єднує атрибути
or оператор
not 
*/

import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/");
  // It's dosn't work problem I can't debug run
  // await expect(page.locator(`//h1[text()='Demo Article']//ancestor::*[@data-qa-type='article-preview']`)).toContainText("Test");
  //*[text()='Popular Tags']/following-sibling::*/a

  // const tagHref = await page.locator('//a[contains(@href,"tag")]').getAttribute("href");
  const tagsLocators = await page.locator('//a[contains(@href,"tag")]').all(); /* return array all elements */

  let tags: Array<string | null> = [];

  for (const loc of tagsLocators) {
    tags.push(await loc.getAttribute("href"));
  }
  console.log(tags);

  const tagsListLocator = page.locator('//*[@sidebar"]//*[@class="tag-list"]');
  await page.waitForTimeout(5000);
  const textContent = await tagsListLocator.textContent(); /*якщо сторінка не завантажиться то поверне нуль  */
  const allTextContents = await tagsListLocator.allTextContents();
  const allInnerTexts = await tagsListLocator.allInnerTexts();
});
