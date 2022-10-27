import '../node_modules/ag-grid-community/dist/styles/ag-grid.css'
import '../node_modules/ag-grid-community/dist/styles/ag-theme-balham.min.css'

// import '../node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.min.noStyle.js'
// import '../node_modules/ag-grid-vue3/dist/ag-grid-vue3.umd.js'
import '../assets/css/main.css';
import './jsLoader';

import 'material-icons/iconfont/material-icons.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

import 'quasar/dist/quasar.css'

import { app } from '@storybook/vue3'
import { Quasar, AppVisibility, Loading, LoadingBar, Notify, Dialog } from 'quasar'
import * as VueRouter from 'vue-router'

import axios from 'axios'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [ ],
})


app.config.globalProperties.$axios = axios

app.use(router)

app.use(Quasar, {
  config: {
    brand: {
      primary: '#07c160',
    },
  },
  plugins: {
    AppVisibility,
    Loading,
    LoadingBar,
    Notify,
    Dialog,
  },
})


//4 mock
import { initialize, mswDecorator } from 'msw-storybook-addon';
// Initialize MSW
initialize();
// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

//above
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
