import base from "@playwright/test";
import { LocatorsPage } from "../pages/LocatorsPage";

type BaseFixtures = {
  locatorsPage: LocatorsPage;
};

export const test = base.extend<BaseFixtures>({
  locatorsPage: async ({ page }, use) => {
    await use(new LocatorsPage(page));
  },
});

export const expect = base.expect;
