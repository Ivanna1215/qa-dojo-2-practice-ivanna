import { test, expect } from "@playwright/test";
import { faker, fi } from "@faker-js/faker";

const authData = [
  {
    testId: "homework-1201",
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.string.numeric(10),
  },
  {
    testId: "homework-1202",
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.string.numeric(10),
  },
  {
    testId: "homework-1203",
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.string.numeric(10),
  },
  {
    testId: "homework-1204",
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.string.numeric(10),
  },
  {
    testId: "homework-1205",
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.string.numeric(10),
  },
];

for (const { testId, firstName, lastName, email, phoneNumber } of authData) {
  test(`${testId} Fill practice form`, async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.locator("#firstName").fill(firstName);
    await page.locator("#lastName").fill(lastName);
    await page.locator("#userEmail").fill(email);
    await page.locator('[for="gender-radio-2"]').click();
    await page.locator("#userNumber").fill(phoneNumber);
    await page.locator(".subjects-auto-complete__control").click();
    await page.locator(".subjects-auto-complete__control input").fill("E");
    await page.locator(".subjects-auto-complete__option").getByText("English", { exact: true }).click();
    await page.locator('button[id="submit"]').click();
    await expect(page.locator('[id="example-modal-sizes-title-lg"]')).toBeVisible();
    await expect(page.getByText("Thanks for submitting the form")).toBeVisible();
    let arr: Array<string> = [];
    arr.push(firstName, lastName, email, phoneNumber);
    console.log(arr);
    for (let data of arr) {
      await expect(page.getByRole("cell", { name: `${data}` })).toBeVisible();
    }
  });
}
