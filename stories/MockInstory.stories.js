// YourPage.stories.js

// import { rest } from "msw";
import {
  mockedSuccess,
  mockedError,
  echoReq,
} from "./mocks/api";

import DocumentScreen from "./MockInstory.vue";

//👇The mocked data that will be used in the story

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "TDD/MOCK",
  component: DocumentScreen,
};

const PageTemplate = () => ({
  components: { DocumentScreen },
  template: "<DocumentScreen />",
});

export const EchoReq = PageTemplate.bind({});
EchoReq.parameters = echoReq;
