import { test, expect } from "../fixtures/base";
import { faker } from "@faker-js/faker";

// test2222
test("create article with api", async ({ request, page }) => {
  const response = await request.post("https://conduit-api.learnwebdriverio.com/api/users/login", {
    data: {
      user: { email: "testsome@gmail.com", password: "1q2w3e" },
    },
  });

  const responseJson = await response.json();
  const token = responseJson.user.token;
  const title = faker.word.noun(5);

  const articleResponse = await request.post("https://conduit-api.learnwebdriverio.com/api/articles", {
    data: {
      article: {
        author: {},
        title: title,
        description: "",
        body: "",
        tagList: [],
      },
    },
    headers: {
      Authorization: "Token " + token,
    },
  });

  expect(articleResponse.status()).toBe(200);

  // await page.goto("https://demo.learnwebdriverio.com/");
  // await expect(page.locator(`//*[data-qa-type="preview-title" and text()=${title}]`)).toBeVisible();

  // const searchResponse = await request.get("https://conduit-api.learnwebdriverio.com/api/articles?offset=0&limit=10", {
  //   data: {
  //     user: { email: "some@gma.com", password: "12345" },
  //   },
  //   headers: {
  //     Authorization: "Token " + token,
  //   },
  // });
});
