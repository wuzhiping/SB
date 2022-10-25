/* eslint-disable no-self-assign */
// __mocks__/isomorphic-fetch.js

// Your fetch implementation to be added to ./storybook/main.js.
// In your webpackFinal configuration object.

import { rest } from "msw";

const TestData = {
  user: {
    userID: 1,
    name: "Someone",
  },
  document: {
    id: 1,
    userID: 1,
    title: "Something",
    brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "approved",
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: "Something",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "approved",
    },
    {
      id: 2,
      userID: 1,
      title: "Something else",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "awaiting review",
    }
  ],
};

export const mockedError = {
  msw: [
    rest.get("https://aaa/get", (_req, res, ctx) => {
      return res(ctx.delay(800), ctx.status(555));
    }),
  ],
};

export const mockedSuccess = {
  msw: [
    rest.get("https://aaa/get", (_req, res, ctx) => {
      return res(ctx.json(TestData));
    }),
  ],
};

export const echoReq = {
  msw: [
    rest.post("https://aaa/post/:id", (_req, res, ctx) => {
      // 接收一个数组
      // url?id=123
      // productIds = _req.url.searchParams.get('a');
      // {
      //   // Where '123' is the value of `req.url.searchParams.get('id')`
      //   // parsed from the request URL.
      //   "productId": "123"
      // }

      // 接收数组
      // url?id=1&id=2&id=3
      // productIds = _req.url.searchParams.getAll('id')
      // {
      //   "productIds": ["1", "2", "3"]
      // }
      return res(ctx.json(TestData));
    }),
  ],
};

