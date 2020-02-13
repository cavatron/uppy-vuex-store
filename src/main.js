import Vue from 'vue';
import App from './App.vue';
import store from './store';

import VuexStore from './uppy';

import Uppy from '@uppy/core';

import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

export const uppy = new Uppy({
  store: new VuexStore({
    store
  })
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
