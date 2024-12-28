import base from "@playwright/test";
import { CoffeeCartPage } from "../pages/CoffeeCartPage";
import { ConditionsPage } from "../pages/ConditionsPage";

type BaseFixtures = {
  coffeeCartPage: CoffeeCartPage;
  conditionsPage: ConditionsPage;
};

export const test = base.extend<BaseFixtures>({
  coffeeCartPage: async ({ page }, use) => {
    await use(new CoffeeCartPage(page));
  },
  conditionsPage: async ({ page }, use) => {
    await use(new ConditionsPage(page));
  },
});

export const expect = base.expect;
