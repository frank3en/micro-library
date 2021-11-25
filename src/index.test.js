const { sleep } = require("./index");
const { test, expect } = require("@jest/globals");

test("the async sleep mock async function sleep 1000ms", async () => {
  expect.assertions(0);
  try {
    await sleep(1000);
  } catch (e) {
    expect(e).toMatch("error");
  }
});

