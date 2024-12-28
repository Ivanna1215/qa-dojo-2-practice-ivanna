import { test, expect } from "../fixtures/base";

test.describe("Homework 7", () => {
  test("[H-701] Determine whether a number is even or odd", async ({ conditionsPage }) => {
    const result = await conditionsPage.determineNumber(10);
    expect(result).toBeTruthy();
  });

  test("[H-702] Determine Hello depends hour", async ({ conditionsPage }) => {
    const hello = await conditionsPage.sayHello(5);
    expect(hello).toContain("Good Morning!");
  });

  test("[H-703] Check average", async ({ conditionsPage }) => {
    const average = await conditionsPage.checkAverage(51);
    expect(average).toBeTruthy();
  });

  test("[H-704] Check age", async ({ conditionsPage }) => {
    const result = await conditionsPage.checkAge(19);
    expect(result).toBeTruthy();
  });

  test("[H-705] Compare number", async ({ conditionsPage }) => {
    const result = await conditionsPage.compareNumber(40, 0);
    expect(result).toContain("First number bigger than second number");
  });

  test("[H-706] Determine way ", async ({ conditionsPage }) => {
    const result = await conditionsPage.determineWay("green");
    expect(result).toBeTruthy();
  });

  test("[H-707] Determine number", async ({ conditionsPage }) => {
    const result = await conditionsPage.isPositive(0);
    expect(result).toBeNull();
  });
});
