import { within, userEvent } from '@storybook/testing-library';
import empty from '../components/empty.vue';

export default {
  title: 'GRID/ABC',
  component: empty,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

import { defineAsyncComponent } from 'vue-demi';
import { rest } from "msw";

const Template = () => ({
  components: { "dev": defineAsyncComponent(() => import('../pages/grid/normal.vue')) },
  template: '<dev />'
});

export const Normal = Template.bind({});

export const Stand = () => ({
  components: { "std": defineAsyncComponent(() => import('../pages/form/stand.vue')) },
  template: '<std />',
});

const gridData = [
  { id: "mock-c1", make: "Toyota", model: "Celica", price: 35000 },
  { id: "c2", make: "Ford", model: "Mondeo", price: 32000 },
  { id: "c8", make: "Porsche", model: "Boxster", price: 72000 },
  { id: "c4", make: "BMW", model: "M50", price: 60000 },
  { id: "c14", make: "Aston Martin", model: "DBX", price: 190000 }
];

Normal.parameters = {
  msw: [
    rest.post("/api/model/demo", (req, res, ctx) => {
      return res(
        ctx.json(
          gridData
        )
      );
    })
  ],
};


