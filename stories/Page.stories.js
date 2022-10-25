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

const Template = () => ({
  components: {  "dev":defineAsyncComponent(() =>import('../pages/grid/normal.vue')) },
  template: '<dev />',
});

export const Normal = Template.bind({});

export const Stand = () => ({
  components: {  "std":defineAsyncComponent(() =>import('../pages/form/stand.vue')) },
  template: '<std />',
});
