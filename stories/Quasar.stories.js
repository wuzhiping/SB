
import { Vue } from 'vue-demi';
import empty from '../components/empty.vue';

export default {
  title: 'Quasar/Components',
  component: empty,
  subcomponents: { }
};

import { defineAsyncComponent } from 'vue-demi';
export const Primary = () => ({
  components: { 
              "tdd":defineAsyncComponent(() =>
                  import('../pages/TDD.vue')
              )},
  template: `
            <tdd></tdd>
            <q-btn label="Standard"></q-btn>
            `,
});